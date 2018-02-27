const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
  {
    title: String,
    prompt: String,
    starterCode: String,
    difficulty: {
      type: String,
      enum: ["Basic", "Medium", "Advanced"]
    },
    revealed: {
      type: Boolean,
      default: false
    },
    testResults: {
      test0: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test1: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test2: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test3: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test4: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test5: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test6: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test7: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test8: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test9: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test10: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      },
      test11: {
        input: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        },
        output: {
          type: mongoose.Schema.Types.Mixed,
          default: undefined
        }
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Challenge", challengeSchema);
