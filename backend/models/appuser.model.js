module.exports = mongoose => {
  const AppUser = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    questions: [
      {
        question: {
          type: String,
          required: true
        },
        answer: {
          type: String,
          required: true
        }
      }
    ]
  });

  return mongoose.model('AppUser', AppUser);
};
