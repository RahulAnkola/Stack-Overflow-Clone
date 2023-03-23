import mongoose, { mongo } from 'mongoose'

const QuestionSchema = new mongoose.Schema({
    questionTitle: {type:String, required:'Title is a must'},
    questionBody: {type:String, required:'Body is a must'},
    questionTags: {type:String, required:'Tags are a must'},
    noOfAnswers: {type:Number, default:0},
    upVote: {type: [String],default:[]},
    downVote: {type: [String],default:[]},
    userPosted: {type: String, required:'Author hovo joi'},
    userId: {type: String},
    askedOn: {type:Date, default: Date.now},
    answer:[{
        answerBody:String,
        userAswered: String,
        userId: String,
        answeredOn: {type:Date, default: Date.now},
    }]
});
export default mongoose.model("Question",QuestionSchema)