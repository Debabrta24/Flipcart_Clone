import mongoose from "mongoose"
const Connection = async () => {
    const URL = `mongodb://localhost:27017/FkClone`
    try {
        await mongoose.connect(URL)
        console.log("database connected ")
    } catch (error) {
        console.log("Error comming from db" + error.message)
    }
}


export default Connection