import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const register = async(req, res)=>{

try{
const {fullname, email, phoneNumber, password, role} = req.body;


if (!fullname|| !email || !phoneNumber || !password || !role){
   res.status(400).json({
    message: "Something is missing",
    success: false
   });
}

const user = await User.findOne({email});
if (user){
    return res.status(400).json({
        message:"user already exits with this email",
        success: false
    })
}


const hashedPassword = await bcrypt.hash(password, 10);

await User.create({
    fullname,
    email,
    phoneNumber,
    role,
    password: hashedPassword
})


}catch(error){




}


}


export const login = async(req, res)=>{
    try{
      const {email, password, role} = req.body;
       

    }catch(error){


    }
}