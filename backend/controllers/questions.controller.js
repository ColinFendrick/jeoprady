const db = require('../models');
const Question = db.Questions;
const AppUser = db.AppUsers;

exports.getQuestions = async (req, res) => {
  try {
    const appUser = await AppUser.findById(req.userId);

    if (!appUser)
      return res.status(404).send({
        message: 'Cannot find your username. Please sign out and back in.'
      });

    const questions = await Question.find({ appUser });

    if (!questions)
      return res.status(401).send({
        message: `Error: Cannot retrieve ${appUser.username}'s questions`
      });

    if (!questions.length)
      return res.send({
        questions,
        message: 'No questions found'
      });

    res.send({
      questions,
      message: 'Successfully retrieved questions'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.createQuestion = async (req, res) => {
  try {
    const appUser = await AppUser.findById(req.userId);
    const newQuestion = new Question({
      question: req.body.question,
      answer: req.body.answer,
      appUser
    });

    await newQuestion.save();

    appUser.questions.push({
      question: newQuestion.question,
      answer: newQuestion.answer,
      _id: newQuestion._id
    });

    await appUser.save();

    res.send({
      data: newQuestion,
      message: 'New Question created'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const appUser = await AppUser.findById(req.userId);

    if (!appUser)
      return res.status(401).send({
        message: 'Cannot find your user info. Please relog.'
      });
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question)
      return res.status(401).send({
        message: 'Cannot find this question. Please reload.'
      });

    const ix = appUser.questions.findIndex(q => q._id === req.body.id);
    appUser.questions.splice(ix, 1);

    res.send({
      appUser,
      message: 'Message successfully deleted'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
