import questionsList from './dummyQuestions';
// width  100%
// height = 9em

const answersList = [
  {
    productId: 100,
    answerId: 200,
    questionId: questionsList[0].questionId,
    body: 'This works up to 5 meters underwater.',
    user: 'User231',
    photo: {
      photoBody:'Here are some photos of the waterproof watches:',
      images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00'],
      photoHelpfulCount: 93
    },
    helpfulCount: 43,
    date: 'May 1, 2019',
    isSeller: true
  },
  {
    productId: 101,
    answerId: 201,
    questionId: questionsList[1].questionId,
    body: 'Heck yea.',
    user: 'User432',
    photo: {
      photoBody:'',
      images: [],
      photoHelpfulCount: 93
    },
    helpfulCount: 42,
    date: 'May 1, 2019',
    isSeller: false
  },
  {
    productId: 102,
    answerId: 202,
    questionId: questionsList[2].questionId,
    body: 'Of course, tomatoes are life.',
    user: 'User942',
    photo: {
      photoBody:'',
      images: [],
      photoHelpfulCount: 93
    },
    helpfulCount: 21,
    date: 'May 1, 2019',
    isSeller: false
  },
  {
    productId: 103,
    answerId: 203,
    questionId: questionsList[3].questionId,
    body: 'Naw.',
    user: 'User4329',
    photo: {
      photoBody:'',
      images: [],
      photoHelpfulCount: 93
    },
    helpfulCount: 23,
    date: 'May 1, 2019',
    isSeller: false
  },
  {
    productId: 104,
    answerId: 204,
    questionId: questionsList[4].questionId,
    body: 'Red.',
    user: 'User345',
    photo: {
      photoBody:'',
      images: [],
      photoHelpfulCount: 93
    },
    helpfulCount: 12,
    date: 'May 1, 2019',
    isSeller: false
  },
  {
    productId: 105,
    answerId: 205,
    questionId: questionsList[5].questionId,
    body: 'Definitely.',
    user: 'User2131',
    photo: {
      photoBody:'',
      images: [],
      photoHelpfulCount: 93
    },
    helpfulCount: 78,
    date: 'May 1, 2019',
    isSeller: false
  }
];

export default answersList;