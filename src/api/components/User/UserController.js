let users = require('./UserData');

// Read all
exports.readAll = (req,res) => {
    return res.status(200).json(users);
};

// Read one by ID
exports.readOneById = (req,res) =>{
    const user = users.find(user => user.id == req.params.id);

    if (!user){
        res.status(404).json({result: `ìd ${req.params.id} not found`});
        console.log("Not Found");
    }
    res.status(200).json(user);
}

// Create one
exports.createOne = (req,res) => {
    const user = {
        id: users[users.length - 1].id + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone : req.body.phone,
        creationDate : new Date(),
        role : req.body.role
    }

    users.push(user);
    res.status(201).json(user);
}

// Edit one
exports.editOne = (req,res) => {
    const user = users.find(user => user.id == req.params.id);

    if (!user){
        res.status(404).json({result: `id ${req.params.id} not found`});
    }else{
        user.splice(user.id,
            {
                firstname: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                role: req.body.role
            })
    }
    console.log(req.body);
    res.status(201).json(user);
}

// Delete one
exports.deleteOne = (req,res) =>{
    const user = users.find(user => user.id == req.params.id);

    if (!user){
        res.status(404).json({result: `id ${req.params.id} not found`});
    }else{
        delete user;
    }
}