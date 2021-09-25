module.exports = mongoose => {
  const Schema = mongoose.Schema;

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
      type: Schema.Types.ObjectId, ref: 'AppUser'
    }
  });

  return mongoose.model('Question', Question);
};
