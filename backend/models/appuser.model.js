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
    admin: {
      type: Boolean,
      required: true,
      default: false
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
    ],
    players: [
      {
        username: {
          type: String,
          required: true
        },
        score: {
          type: Number,
          required: true,
          default: 0
        }
      }
    ]
  });

  return mongoose.model('AppUser', AppUser);
};
