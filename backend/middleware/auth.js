const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, 'IVSOFT', (err, user) => {
        if (err) {
            return res.status(403).send({statusText: 'token expired'})
        } else {
            console.log(user)
            req.user = user
            next()
        }
    })
}

module.exports = authenticateToken