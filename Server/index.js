// --- Forgot Password (Reset) Endpoint ---
app.post('/resetpassword', async (req, res) => {
    const { username, newPassword } = req.body;
    if (!username || !newPassword) {
        return res.status(400).json({ success: false, message: 'Username and new password are required.' });
    }
    try {
        const result = await User.updateOne({ username }, { $set: { password: newPassword } });
        if (result.modifiedCount > 0) {
            res.json({ success: true, message: 'Password updated successfully.' });
        } else {
            res.json({ success: false, message: 'User not found or password not changed.' });
        }
    } catch (err) {
        console.log('Error resetting password:', err);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});


// --- CLEANED UP AND REORDERED CODE ---
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

function generateAccessToken(name) {
    return jwt.sign({ name }, JWT_SECRET, { expiresIn: '1h' });
}
const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


// --- Mongoose Models ---

// --- Admin Model ---
const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String
});
const Admin = mongoose.model('Admin', AdminSchema, 'admins');


const LetstalkSchema = new mongoose.Schema({
    names: String,
    email: String,
    message: String
});
const Letstalk = mongoose.model('Letstalk', LetstalkSchema);

// --- User Model ---
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    birthday: String,
    password: String,
    confirmPassword: String
});
const User = mongoose.model('User', UserSchema);

// --- Custom Rig Model ---
const CustomRigSchema = new mongoose.Schema({
    userid: String,
    usagetype: String,
    processor: String,
    model: String,
    cabin: String,
    motherboard: String,
    gpu: String,
    smps: String,
    storage: String,
    ram: String,
    cooler: String
});
const CustomRig = mongoose.model('CustomRig', CustomRigSchema);

// --- Pre Build Model ---
const PreBuildSchema = new mongoose.Schema({
    productid: String,
    usagetype: String,
    configuration: String,
    price: String
});
const PreBuild = mongoose.model('PreBuild', PreBuildSchema);

mongoose.connect('mongodb://localhost:27017/rigbuilddb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected...');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// --- ROUTES ---


app.post('/create', (req, res) => {
    console.log("reachin post req")
    const { username, email, birthday, password, confirmPassword } = req.body;
    console.log(req.body)
    User.create({
        username,
        email,
        birthday,
        password,
        confirmPassword
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting user");
    });
});

app.post('/UsersCustombuild', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const usagetype = req.body.usagetype;
    const cooler = req.body.cooler;
    console.log(req.body)
    CustomRig.create({
        userid,
        usagetype,
        processor: req.body.processor,
        model: req.body.model,
        cabin: req.body.cabin,
        motherboard: req.body.motherboard,
        gpu: req.body.gpu,
        smps: req.body.smps,
        storage: req.body.storage,
        ram: req.body.ram,
        cooler
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting custom rig");
    });
});

app.get('/getuserorderdetails', (req, res) => {
    CustomRig.find()
        .then(rigs => res.send(rigs))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching custom rigs");
        });
});

app.get('/getuserdata', (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching users");
        });
});

app.get('/getprebuilddata', (req, res) => {
    CredOp.find()
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching credop data");
        });
});

// (Continue with all other routes as previously defined, in the same order, but after app and models are defined)

// --- SERVER START ---




// --- Admin Signin Route ---
app.post("/AdminSignin", async (req, res) => {
    const { email, password } = req.body;
    console.log("in login");
    console.log("Login attempt with email:", email, "password:", password);
    try {
        const allAdmins = await Admin.find({});
        console.log("All admins in DB:", allAdmins);
        const query = { email, password };
        console.log("Querying with:", query);
        const admin = await Admin.findOne(query);
        console.log("Admin found:", admin);
        if (admin) {
            const token = generateAccessToken(admin.name);
            res.json({ token: `Bearer ${token}` });
        } else {
            res.status(400).send("not found");
        }
    } catch (err) {
        console.log("Error during admin signin:", err);
        res.status(500).send("Error during admin signin");
    }
});







app.post('/UsersCustombuild', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const usagetype = req.body.usagetype;
    const cooler = req.body.cooler;
    console.log(req.body)
    CustomRig.create({
        userid,
        usagetype,
        processor: req.body.processor,
        model: req.body.model,
        cabin: req.body.cabin,
        motherboard: req.body.motherboard,
        gpu: req.body.gpu,
        smps: req.body.smps,
        storage: req.body.storage,
        ram: req.body.ram,
        cooler
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting custom rig");
    });
});



// TODO: Implement this endpoint with MongoDB if needed
// Return all custom build orders (same as /getdatafromtable)
app.get('/getuserorderdetails', (req, res) => {
    CustomRig.find()
        .then(rigs => res.send(rigs))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching custom rigs");
        });
});

// user login data
app.get('/getuserdata', (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching users");
        });
});


//cred operation data

// TODO: Implement this endpoint with MongoDB if needed
app.get('/getprebuilddata', (req, res) => {
    CredOp.find()
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching credop data");
        });
});


//data from contact us
app.get('/getuserquery', (req, res) => {
    ContactUs.find()
        .then(contacts => res.send(contacts))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching contact us data");
        });
});

//data from login user queries
app.get('/getusertalks', (req, res) => {
    Letstalk.find()
        .then(talks => res.send(talks))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching letstalks");
        });
});

//data of custom build orders
app.get('/getdatafromtable', (req, res) => {
    CustomRig.find()
        .then(rigs => res.send(rigs))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching custom rigs");
        });
});


//data of custom gears data
app.get('/getdatafromordertable', (req, res) => {
    Gears.find()
        .then(gears => res.send(gears))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching gears");
        });
})

//data of per build and recommmandation orders
app.get('/getdataprerec', (req, res) => {
    PrerecOrder.find()
        .then(orders => res.send(orders))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching prerec orders");
        });
});


app.post('/CustomGear', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const keyBoard = req.body.keyboard;
    const mouse = req.body.mouse;
    const headphones = req.body.headphones;
    const monitor = req.body.monitor;
    const chair = req.body.chair;
    console.log(req.body)

    Gears.create({
        userid,
        keyboard: keyBoard,
        mouse,
        headphones,
        monitor,
        chair
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting gears");
    });
})


app.post('/Customorderpay', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid;
    const email = req.body.email;
    const address = req.body.address;
    const rigtype = req.body.rigtype;
    const payment = req.body.payment;
    console.log(req.body)

    OrderPayment.create({
        userid,
        email,
        address,
        rigtype,
        payment
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting order payment");
    });
})


// ContactUs form submission endpoint
app.post('/letstalk', async (req, res) => {
    console.log("reachin post req");
    const { names, email, message } = req.body;
    console.log(req.body);

    if (!names || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        await Letstalk.create({ names, email, message });
        res.json({ success: true, message: "Successfully submitted!" });
    } catch (err) {
        console.log("Error inserting letstalk:", err);
        res.status(500).json({ success: false, message: "Error inserting letstalk" });
    }
});

app.post('/adminlog', (req, res) => {
    console.log("reachin post req")
    const User_ID = req.body.userid;
    const Password = req.body.password;
    console.log(req.body)

    Admin.create({
        email: User_ID,
        password: Password,
        name: User_ID
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting admin");
    });
})



// TODO: Implement this endpoint with MongoDB if needed
app.post('/CREDAdd', (req, res) => {
    const Product_ID = req.body.productid;
    const Usage_type = req.body.usagetype;
    const Configuration = req.body.configuration;
    const Price = req.body.price;
    CredOp.create({ Product_ID, Usage_type, Configuration, Price })
        .then(() => res.send("inserted into table"))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error inserting credop");
        });
});


// TODO: Implement this endpoint with MongoDB if needed
app.delete('/CREDdelete/:productid', (req, res) => {
    const productid = req.params.productid;
    CredOp.deleteOne({ Product_ID: productid })
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error deleting credop");
        });
});


// TODO: Implement this endpoint with MongoDB if needed
app.put('/CREDupdate', (req, res) => {
    const productid = req.body.productid;
    const Usage_type = req.body.usagetype;
    const Configuration = req.body.configuration;
    const Price = req.body.price;
    CredOp.updateOne(
        { Product_ID: productid },
        { $set: { Usage_type, Configuration, Price } }
    )
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error updating credop");
        });
});





// TODO: Implement this endpoint with MongoDB if needed
// Return custom build, gears, and prerec_order for a user
app.get('/CustombuildgearsOrderDetails/', async (req, res) => {
    try {
        const userid = req.query.userid;
        const data1 = await CustomRig.find({ userid });
        const data2 = await Gears.find({ userid });
        const data3 = await PrerecOrder.find({ userid });
        res.send([
            { key: 'data1', value: data1 },
            { key: 'data2', value: data2 },
            { key: 'data3', value: data3 }
        ]);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching custom rig/gears/prerec_order");
    }
});




// --- ROUTES END ---

app.listen(3001, () => {
    console.log('server running on 3001');
});