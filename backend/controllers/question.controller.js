const models = require('../models');
const Question = models.Questions;
const AppUser = models.AppUsers;

exports.getQuestions = async (req, res) => {
  try {
    const appUser = req.appUser;

    if (appUser.admin) {
      const questions = await Question.find({ appUser });

      res.send({
        data: questions,
        message: 'Successfully retrieved all user questions'
      });
    }

    const questions = await Question.find({ appUser });

    if (!questions)
      return res.status(401).send({
        message: `Error: Cannot retrieve ${appUser.username}'s questions`
      });

    if (!questions.length)
      return res.send({
        data: questions,
        message: 'No questions found'
      });

    res.send({
      data: questions,
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
    const appUser = req.appUser;

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
      data: appUser,
      message: 'New Question created'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const appUser = req.appUser;

    const question = await Question.findByIdAndUpdate(
      req.params.id,
      {
        question: req.body.question,
        answer: req.body.answer
      },
      { new: true, runValidators: true }
    );

    if (!question)
      return res.status(401).send({
        message: 'Cannot find this question. Please reload.'
      });

    const ix = appUser.questions.findIndex(q => q._id === req.body.id);
    appUser.questions.splice(ix, 1, question);

    await appUser.save();

    res.send({
      data: appUser,
      message: 'Message successfully deleted'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const appUser = req.appUser;

    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question)
      return res.status(401).send({
        message: 'Cannot find this question. Please reload.'
      });

    const ix = appUser.questions.findIndex(q => q._id === req.body.id);
    appUser.questions.splice(ix, 1);

    await appUser.save();

    res.send({
      data: appUser,
      message: 'Message successfully deleted'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
