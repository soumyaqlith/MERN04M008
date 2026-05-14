
const authentication = async (req, res, next) => {
    try {
        console.log("this is my authentication middle ware")
        // throw new Error("this is error")
        next()
    } catch (error) {
        res.status(500).json({ message: "failed in the authentication middleware" })
    }
}

module.exports=authentication