const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

exports.signupNormal = (req, res) => {
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    const { fname, lname, email, password } = req.body
    User.findOne({ email: email })
        .then((savedUser) => {

            if (savedUser) {
                return res.status(422).json({ error: "User already exists with this email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        password: hashedPassword,
                        email,
                        fname,
                        lname,
                    })
                    user.save().then(user => {
                        res.json({ message: "SignedUp success !" })
                        res.json({ message: "SignedUp success !" })
                    })
                        .catch(e => {
                            console.log(e)
                        })
                })
        })
        .catch(e => {
            console.log(e)
        })
};
exports.signupGoogle = (req, res) => {
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    const user = new User(req.body);
    user.save((err, newUser) => {
        if (!newUser)
            return res.status(400).json({ error: "Email address already exists !" });
        res.status(200).json({ message: "Signedup success !" });
    });
};

exports.signinGoogle = (req, res) => {
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    const { email, lname, fname } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Error Logging in !",
            });
        }
        if (user.password)
            return res.status(401).json({ error: "Already signed in !" });

        if (fname !== user.fname || lname !== user.lname)
            return res.status(401).json({ error: "Error Logging in !" });

        // create jwt token
        const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // put token in cookie
        res.json({ token: jwtToken, message: "LoggedIn Successfully !", user });
    })
}

exports.signinNormal = (req, res) => {
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Wrong username or password !",
            });
        }
        if (!user.password)
            return res.status(401).json({ error: "Already signed in !" });

        bcrypt.compare(password, user.password).then(doMatch => {
            if (doMatch) {
                const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                res.json({ token: jwtToken, message: "LoggedIn Successfully !", user });
            }
            return res.status(422).json({ error: "Wrong username or password !" })
        })
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
