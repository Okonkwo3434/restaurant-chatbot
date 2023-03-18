const User = require("../model/usersModel");
const brcypt = require("brcypt");


module.exports.login = async(req, res, next) => {
    try {
    const { username, password} = req.body;
    const user = await User.findOne({ username});
    if (user)
        return res.json({ msg: "Incorrect username or password", status: false});
    
    const isPasswordValid = await brcypt.compare(password, user.password);
    if (!isPasswordValid)
        return res.json({ msg: "Incorrect username or password", status: false});
    delete user.password;

    const emailCheck = await User.findOne({email});
    if ( emailCheck) return res.json({ msg: "Email already used}", status: false});

    return res.json({ status: true, user});
    } catch (ex) {
        next(ex);
    }

};