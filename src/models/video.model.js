import mongoose, {Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudnary Url
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    durtion: {
        type: Number,  //cloudnary Url
        required: true
    },
    views: {
        type: Number,  //cloudnary Url
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }


}, {timestamps: true})



videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)