module.exports = mongoose => {
  const Question = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    appUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AppUser'
    }
  });

  return mongoose.model('Question', Question);
};
