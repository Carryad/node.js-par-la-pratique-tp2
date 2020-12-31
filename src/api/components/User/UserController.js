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

// Update one by id
exports.editOneById = (req,res) => {

    let user = users.find(user => user.id == req.params.id);

    if (!user){
        res.status(404).json({result: `id ${req.params.id} not found`});
        return;
    }

    // Correction :
    /*for (const key in req.body){
        if (user.hasOwnProperty(key)) {
            if (key != 'id') {
                user[key] = req.body[key];
            }
        }
        console.log(key);
    }
    res.status(201).json(user);*/

    // Ma méthode : 
    if (req.body.firstName != null){
        user.firstName = req.body.firstName;
    }
    if (req.body.lastName != null) {
        user.lastName = req.body.lastName;
    }
    if (req.body.email != null) {
        user.email = req.body.email;
    }
    if (req.body.password != null) {
        user.password = req.body.password;
    }
    if (req.body.phone != null) {
        user.phone = req.body.phone;
    }
    if (req.body.role != null) {
        user.role = req.body.role;
    }

    res.status(201).json(user);
    
}

// Delete one
exports.deleteOne = (req,res) =>{
    let user = users.find(user => user.id == req.params.id);

    if (!user){
        res.status(404).json({result: `id ${req.params.id} not found`});
    }

    users = users.filter(user => user.id != req.params.id);

    res.status(200).json(`L'utilisateur ayant pour id ${req.params.id} a été supprimé`);

    //Moi j'avais pas réussi ca xD
}