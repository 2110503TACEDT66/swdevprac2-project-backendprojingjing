import mongoose from "mongoose"
const CoworkingspaceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please add a name'],
        unique: true,
        trim:true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    address:{
        type: String,
        required: [true,'Please add an address']
    },
    district:{
        type: String,
        required: [true,'Please add a district']
    },
    province:{
        type: String,
        required: [true,'Please add a province']
    },
    postalcode:{
        type: String,
        required: [true,'Please add a postalcode'],
        maxlength:[5,'Postal Code can not be more than 5 digits']
    },
    telephone_number:{
        type: String
    },
    opentime:{
        type: String,
        required:[true,'Please add an opentime'],
        maxlength:[5,'Time can not be more than 5 digits']
    },
    closetime:{
        type: String,
        required:[true,'Please add an closetime'],
        maxlength:[5,'Time can not be more than 5 digits']
    },
    picture:{
        type: String,
        required:[true,'Please add a picture'],
    },
    star:{
        type: Number,
        required: [true,'Please add a rating'],
        min: [0, 'Rating must be at least 0'],
        max: [5, 'Rating can not be more than 5']
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}
);
const coworkingspaces = mongoose.models.Coworkingspaces || mongoose.model("coworkingspaces", CoworkingspaceSchema);
export default coworkingspaces