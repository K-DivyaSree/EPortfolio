import UserModel from "../model/userDetailModel.js";

export const registerController = async (req, res) => {
    const { name, email, subject, message } = req.body

    try {
        const existingUser = await UserModel.findOne({ email });
        //  existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Rgistered Please Login",
            })
        }

        const user = await new UserModel({
            name,
            email,
            subject,
            message,
        }).save();
        console.log(user);
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        })
    }


}