
const validation = async (req, res, next) => {
    try {
        console.log("this is my validation middle ware")
        next()
    } catch (error) {
        res.status(500).json({ message: "failed in the validation middleware" })
    }
}

module.exports=validation