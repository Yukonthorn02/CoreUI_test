var jwt = require('jsonwebtoken')
const modelPath = `${process.cwd()}/${process.env.ROOT_PATH ? process.env.ROOT_PATH : ""
    }models`;

const models = require("require-all")({
    dirname: modelPath,
    filter: function (fileName) {
        return fileName.replace(".js", "");
    },
});

const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    login: async (req, res) => {
        const username = req.body.username
        const password = req.body.password

        try {
            const model = models['stts_accounts'];

            if (!model) {
                throw model;
            }

            let request = model.find({ act_username: username }, req.body.fields ? req.body.fields : "")
            request = request.populate('act_role')

            // if (req.body.populate) {
            //     const populateList = Array.isArray(req.body.populate) ? req.body.populate : req.body.populate.split(",")
            //     for await (const item of populateList) {
            //         request = request.populate(item)
            //     }
            // }

            // sort
            if (req.body.orderBy) {
                request = request.sort(req.body.orderBy)
            }

            const data = await request.lean().exec()
            if (data[0].act_password === password) {
                console.log('OK')
                const user = {
                    id: data[0]._id,
                    USERNAME: data[0].act_username,
                    FIRST_NAME: data[0].act_first_name_th,
                    LAST_NAME: data[0].act_last_name_th,
                    EMAIL: data[0].act_email_address,
                    role:   data[0].act_roles,
                }
                const token = jwt.sign(user, 'IVSOFT', { expiresIn: '3600s' });
                user.token = token
                res.status(200).send({
                    statusText: 'Login Success',
                    user
                })
            } else {
                res.send('authentication failed')
            }

        } catch (error) {
            console.log("Error At mongoose-find: ", error);
            res.send('error')
            // next(error);
        }

        // const user = {
        //     FIRST_NAME: 'Tatat',
        //     LAST_NAME: 'Thanakanok',
        //     EMAIL: 'tatat@osdev.co.th'
        // }
        // const token = jwt.sign(user, 'IVSOFT', { expiresIn: '3600s' });
    
        // res.status(200).send({
        //     statusText: 'Login Success',
        //     data: {
        //         token: token,
        //         role: 'ADMIN'
        //     }
        // })
    }
}