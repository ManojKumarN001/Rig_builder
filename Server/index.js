
// --- CLEANED UP AND REORDERED CODE ---
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/rigbuilddb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected...');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// --- ROUTES ---
app.post("/AdminSignin", (req, res) => {
    const { email, password } = req.body;
    console.log("in login");
    console.log(email, password);
    Admin.findOne({ email, password })
        .then(admin => {
            if (admin) {
                const token = generateAccessToken(admin.name);
                res.json({ token: `Bearer ${token}` });
            } else {
                res.status(400).send("not found");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error during admin signin");
        });
});

app.post('/create', (req, res) => {
    console.log("reachin post req")
    const username = req.body.username;
    const email = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
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
    CustomBuild.create({
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
        res.status(500).send("Error inserting custom build");
    });
});

app.get('/getuserorderdetails', (req, res) => {
    CustomBuild.find()
        .then(builds => res.send(builds))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching custom builds");
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




app.post("/AdminSignin", (req, res) => {
    const { email, password } = req.body;
    console.log("in login");
    console.log(email, password);
    Admin.findOne({ email, password })
        .then(admin => {
            if (admin) {
                const token = generateAccessToken(admin.name);
                res.json({ token: `Bearer ${token}` });
            } else {
                res.status(400).send("not found");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error during admin signin");
        });
});







app.post('/UsersCustombuild', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const usagetype = req.body.usagetype;
    const cooler = req.body.cooler;
    console.log(req.body)
    CustomBuild.create({
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
        res.status(500).send("Error inserting custom build");
    });
});



// TODO: Implement this endpoint with MongoDB if needed
// Return all custom build orders (same as /getdatafromtable)
app.get('/getuserorderdetails', (req, res) => {
    CustomBuild.find()
        .then(builds => res.send(builds))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching custom builds");
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
    CustomBuild.find()
        .then(builds => res.send(builds))
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching custom builds");
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


app.post('/letstalk', (req, res) => {
    console.log("reachin post req")
    const names = req.body.names
    const email = req.body.email;
    const message = req.body.message;
    console.log(req.body)

    ContactUs.create({
        names,
        email,
        message
    })
    .then(() => res.send("inserted into table"))
    .catch(err => {
        console.log(err);
        res.status(500).send("Error inserting contact us");
    });
})

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
        const data1 = await CustomBuild.find({ userid });
        const data2 = await Gears.find({ userid });
        const data3 = await PrerecOrder.find({ userid });
        res.send([
            { key: 'data1', value: data1 },
            { key: 'data2', value: data2 },
            { key: 'data3', value: data3 }
        ]);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching custom build/gears/prerec_order");
    }
});




// --- ROUTES END ---

app.listen(3001, () => {
    console.log('server running on 3001');
});