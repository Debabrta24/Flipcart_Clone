import axios from "axios"

const URL = 'http://localhost:5000/signup'
export const authenticateSignup = async (data) => {
    try {
        await axios.post(URL, data)
    } catch (error) {
        console.log("error while calling sign up api ")
    }
}

export default authenticateSignup;