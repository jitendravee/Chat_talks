import mongoose from "mongoose";


const SignUpSchema = new mongoose.Schema({
    EmailId : {
        type: String,
        required :true
    },
    Password : {
type: String,
required: true 
    },
    
},
{
    timestamps: true
}
);


export const SignUp = mongoose.model('User1', SignUpSchema);