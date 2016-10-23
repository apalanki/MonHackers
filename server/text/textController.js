var questionsDataMap = {
    '0': 'Welcome to MonCybers Text Registration Portal. Text YES to continue with registration',
    'To begin the registration can you please give us your first name?': 'firstName',
    'Last name?': 'lastName',
    'Address or current location?': 'address',
    'Is this the best number to reach you?': 'phoneNumber'
};

const logger = require('log4js').getLogger();
var dao = require('../mongo/dao');
var currentNumber = '';
var answeredQuestions = [];

function getNextQuestion() {
    return Object.keys(questionsDataMap)[answeredQuestions.length];
}

module.exports = {
    maintainConversation: function (number, text) {
        if (answeredQuestions.length === 0 && currentNumber === '') {
            console.log('first message');
            currentNumber = number;
            return 'Hi ' + number + '. Thanks for texting us.' + questionsDataMap["0"];
        } else if (currentNumber === number && answeredQuestions.length === 0) {
            console.log('second message');
            if (text === 'YES' || text === 'yes') {
                answeredQuestions.push(text);
                return getNextQuestion();
            } else {
                return 'Hi ' + number + '. Thanks for texting us.' + questionsDataMap["0"];
            }
        } else if (currentNumber === number && answeredQuestions.length > 0 && answeredQuestions.length <= Object.keys(questionsDataMap).length - 2) {
            console.log('subsequent messages, answered questions length: ', answeredQuestions.length);
            answeredQuestions.push(text);
            return getNextQuestion();
        } else if (answeredQuestions.length === questionsDataMap.length - 1) {
            answeredQuestions.push(text);
            console.log('All questions answered', answeredQuestions);
            dao.insertApplicant(JSON.stringify(answeredQuestions), (err) => {
                if (err) logger.error(err);
                else logger.info('Successfully inserted responses for ', number);
                answeredQuestions = [];
            });
            // Save answers to Database and send appropriate data for further registration
            return 'This completes partial registration. Please visit any of the shelters listed above to continue with registration';
        } else {
            // Case where the previous person disconnected
            console.log('Start over a new session', answeredQuestions.length);
            currentNumber = number;
            answeredQuestions = [];
            return 'Hi ' + number + '. Thanks for texting us.' + questionsDataMap["0"];
        }
    }
};