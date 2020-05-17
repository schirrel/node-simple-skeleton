
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '').trim() 
        const decoded  = jwt.verify(token, process.env.SECRET);

        console.log(decoded);
        next()
    } catch (error) {
        //TODO IMPLEMENT TOKEN EXPIRED RETURN
        console.log(error)
        res.status(401).send({error:'Please authenticate!'})
    }
}

module.exports = auth