import user from "../model/userSchema.js";
export const userSignup = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const exists = await user.findOne({ username: data.username })
        if (exists) {
            return res.status(401).json({ message: "user alreday exists" })
        }
        const newUser = user(data);
        await newUser.save();
        return res.status(200).json({ message: data })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}