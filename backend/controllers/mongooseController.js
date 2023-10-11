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
    // find: async (req, res, next) => {
    //     try {
    //         const model = models['stts_accounts'] // models[req.params.model];

    //         if (!model) {
    //             throw model;
    //         }
    //         req.body.populate = [ "act_role"]

    //         // const whereCompany = { COMPANY: req.user.data.COMPANY }
    //         let request = model.find(req.body.where ? { ...req.body.where } : {}, req.body.fields ? req.body.fields : "")

    //         // populate
    //         if (req.body.populate) {
    //             const populateList = Array.isArray(req.body.populate) ? req.body.populate : req.body.populate.split(",")
    //             for await (const item of populateList) {
    //                 request = request.populate(item)
    //             }
    //         }

    //         // sort
    //         if (req.body.orderBy) {
    //             request = request.sort(req.body.orderBy)
    //         }

    //         const data = await request.lean().exec()
    //         res.status(200).send(data);
    //     } catch (error) {
    //         console.log("Error At mongoose-find: ", error);
    //         res.status(500).send("ERROR");
    //     }
    // },

    // EXAMPLE CONTROLLER //
    find: async (req, res, next) => {
        try {
            const model = models[req.params.model];

            if (!model) {
                throw model;
            }

            let request = model.find(req.body.where ? req.body.where : {}, req.body.fields ? req.body.fields : "")
            
            // populate
            console.log(req.body.populate)
            if (req.body.populate) {
                const populateList = Array.isArray(req.body.populate) ? req.body.populate : req.body.populate.split(",")
                for await (const item of populateList) {
                    console.log(item)
                    request = request.populate(item)
                }
            }

            // sort
            if (req.body.orderBy) {
                request = request.sort(req.body.orderBy)
            }

            const data = await request.lean().exec()
            res.send(data);
        } catch (error) {
            console.log("Error At mongoose-find: ", error);
            next(error);
        }
    },
    findOne: async (req, res, next) => {
        try {
            const model = models[req.params.model];

            if (!model) {
                throw model;
            }

            let request = model.findOne(req.params.id
                ? {
                    _id: new ObjectId(req.params.id),
                } : req.body.where ? req.body.where : {}, req.body.fields ? req.body.fields : "")

            // populate
            if (req.body.populate) {
                const populateList = Array.isArray(req.body.populate) ? req.body.populate : req.body.populate.split(",")
                for await (const item of populateList) {
                    request = request.populate(item)
                }
            }

            const data = await request.lean().exec()
            res.send(data);
        } catch (error) {
            console.log("Error At mongoose-findOne: ", error);
            next(error);
        }
    },
    save: async (req, res, next) => {
        try {
            const model = models[req.params.model];

            console.log(req.body.data)
            if (!model) {
                throw model;
            }

            let data = Array.isArray(req.body.data)
                ? await model.insertMany(req.body.data)
                : await model.create(req.body.data);

            // populate
            if (req.body.populate) {
                const populateList = Array.isArray(req.body.populate) ? req.body.populate : req.body.populate.split(",")
                for await (const item of populateList) {
                    data = await data.populate(item)
                }
            }
            

            res.send(data);
        } catch (error) {
            // console.log("Error At mongoose-save: ", error);
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const model = models[req.params.model];

            if (!model) {
                throw model;
            }

            let data = req.params.id
                ? await model.findOneAndUpdate(
                    {
                        _id: new ObjectId(req.params.id),
                    },
                    req.body.data,
                    { new: true }
                )
                : await model.updateMany(req.body.where, req.body.data);

            // populate
            if (req.body.populate) {
                const populateList = Array.isArray(req.body.populate) ? req.body.populate : req.body.populate.split(",")
                for await (const item of populateList) {
                    data = await data.populate(item)
                }
            }

            res.send(data);
        } catch (error) {
            console.log("Error At mongoose-update: ", error);
            next(error);
        }
    },
    remove: async (req, res, next) => {
        try {
            const model = models[req.params.model];

            if (!model) {
                throw model;
            }

            const data = req.params.id
                ? await model.findOneAndRemove({
                    _id: new ObjectId(req.params.id),
                })
                : await model.deleteMany(req.body.where);

            res.send(data);
        } catch (error) {
            console.log("Error At mongoose-remove: ", error);
            next(error);
        }
    },
    aggregate: async (req, res, next) => {
        try {
            const model = models[req.params.model];
            if (!model) {
                throw model;
            }
            let request = model.aggregate(req.body.aggregate)

            // sort
            if (req.body.orderBy) {
                request = request.sort(req.body.orderBy)
            }
            const data = await request.exec()
            res.send(data);
        } catch (error) {
            console.log("Error At mongoose-aggregate: ", error);
            next(error);
        }
    },
}