const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signupNormal = (req, res) => {
    const user = new User(req.body);
    user.save((err, newUser) => {
        if (!newUser)
            return res.status(400).json({ error: "Email address already exists !" });
        res.status(200).json({ message: "Signedup success !" });
    });
};
exports.signupGoogle = (req, res) => {
    const user = new User({ ...req.body, isGoogleSignedIn: true });
    user.save((err, newUser) => {
        if (!newUser)
            return res.status(400).json({ error: "Email address already exists !" });
        res.status(200).json({ message: "Signedup success !" });
    });
};

exports.signinGoogle = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Email or password do not match !",
            });
        }

        if (!user.confirmed)
            return res.status(400).json({
                error: "You need to verify your email before login !",
            });
        if (user.isGoogleSignedIn)
            return res.status(401).json({ error: "Already signed in !" });

        if (!user.autheticate(password)) {
            return res.status(401).json({
                error: "Email or password do not match !",
            });
        }
        // create jwt token
        const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // put token in cookie
        res.cookie("token", jwtToken, { expire: new Date() + 9999 });
        res.json({ token: jwtToken, message: "LoggedIn Successfully !", user });
    })
}

exports.signinNormal = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Email or password do not match !",
            });
        }

        if (!user.confirmed)
            return res.status(400).json({
                error: "You need to verify your email before login !",
            });
        if (user.isGoogleSignedIn)
            return res.status(401).json({ error: "Already signed in !" });

        if (!user.autheticate(password)) {
            return res.status(401).json({
                error: "Email or password do not match !",
            });
        }
        // create jwt token
        const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // put token in cookie
        res.cookie("token", jwtToken, { expire: new Date() + 9999 });
        res.json({ token: jwtToken, message: "LoggedIn Successfully !", user });
    })
}

exports.isSignedIn = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        return res.status(401).json({ error: "You must be logged in !" });
    const token = authorization.replace("Bearer ", "");

    // verifying jwt token
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(401).json({ error: "You must be logged in !" });
        const { _id } = payload;

        // finding the user with the id
        User.findById(_id)
            .exec((err, user) => {
                if (!user)
                    return res.status(401).json({ error: "You must be logged in !" });
                if (!user.confirmed)
                    return res.status(401).json({ error: "You must confirm your account first!" });
                next();
            });
    });
};

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User signout successfully !",
    });
};
