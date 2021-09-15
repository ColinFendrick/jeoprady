module.exports = mongoose => {
  const Question = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  });

  return mongoose.model('Question', Question);
};
