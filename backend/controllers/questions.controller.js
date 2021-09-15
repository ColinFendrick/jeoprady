const db = require('../models');
const Question = db.Questions;

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();

    if (!questions)
      return res.send({
        message: 'No questions found'
      });


    res.send({
      questions
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
