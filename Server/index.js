const express = require('express');
const app = express(); //variable

const mysql = require('mysql');
const cors = require('cors');

const { generateAccessToken, validateToken } = require("./auth");
const { Router } = require("express");
const router = Router();


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'rigbuilddb'
});

app.post("/AdminSignin", (req, res) => {
    const { email, password } = req.body;
    console.log("in login");
    console.log(email, password);
    db.query(
        "SELECT * FROM admin_log WHERE 	email = ? AND Password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length > 0) {
                    console.log(result);
                    user = result[0]["name"]; //enter the name of the person
                    console.log(`user : ${user}`);
                    const token = generateAccessToken(user);
                    console.log(token);
                    res.json({
                        token: `Bearer ${token}`,
                    });
                } else {
                    res.statusCode = 400;
                    console.log(result);
                    res.send("not found");
                }
            }
        }
    );
    //   else res.sendStatus(401);
});

app.post('/create', (req, res) => {
    console.log("reachin post req")
    const id = req.body.id
    const username = req.body.username;
    const email = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(req.body)

    db.query('INSERT into userlogin(Username, Email, birthday, Password , Confirm_Password)  VALUES (?,?,?,?,?)', [username, email, birthday, password, confirmPassword],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.post('/letstalks', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const rigtype = req.body.rigtype;
    const budget = req.body.budget;
    const componentseal = req.body.componentseal;
    console.log(req.body)

    db.query('INSERT into letstalk(User_ID, Email, phone_number, rigtype , budget, component_seal)  VALUES (?,?,?,?,?,?)', [userid, email, phonenumber, rigtype, budget, componentseal],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.post('/UsersCustombuild', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const usagetype = req.body.usagetype;
    const processor = req.body.processor;
    const model = req.body.model;
    const cabin = req.body.cabin;
    const motherboard = req.body.motherboard;
    const gpu = req.body.gpu;
    const smps = req.body.smps;
    const storage = req.body.storage;
    const ram = req.body.ram;
    const cooler = req.body.cooler;

    console.log(req.body)

    db.query('INSERT into custom_build( user_ID, Usage_type, processor, processor_model , cabin, motherboard, gpu, smps, storage, ram, coller)  VALUES (?,?,?,?,?,?,?,?,?,?,?)', [userid, usagetype, processor, model, cabin, motherboard, gpu, smps, storage, ram, cooler],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.post('/Prerecorder', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const productid = req.body.productid;
    const email = req.body.email;
    const address = req.body.address;
    const rigtype = req.body.rigtype;
    const payment = req.body.payment;
    console.log(req.body)

    db.query('INSERT into prerec_order(User_ID, product_id, email, address, rig_type, payment)  VALUES (?,?,?,?,?,?)', [userid, productid, email, address, rigtype, payment],
        (err, result) => {
            this.setState({ userid: result })
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.get('/getuserorderdetails', (req, res) => {
    db.query('SELECT * From custom_build',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        }
    )
})

// user login data
app.get('/getuserdata', (req, res) => {
    db.query('SELECT * From userlogin',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        }
    )
})


//cred operation data
app.get('/getprebuilddata', (req, res) => {
    db.query('SELECT * From credop',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        }
    )
})


//data from contact us
app.get('/getuserquery', (req, res) => {
    db.query('SELECT * From contact_us',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        }
    )
})

//data from login user queries
app.get('/getusertalks', (req, res) => {
    db.query('SELECT * From letstalk',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        }
    )
})

//data of custom build orders
app.get('/getdatafromtable', (req, res) => {
    db.query('SELECT * FROM custom_build',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)

            }
        }
    )
})


//data of custom gears data
app.get('/getdatafromordertable', (req, res) => {
    db.query('SELECT * FROM gears',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        })
})

//data of per build and recommmandation orders
app.get('/getdataprerec', (req, res) => {
    db.query('SELECT * FROM prerec_order',
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send(result)
            }
        })
})


app.post('/CustomGear', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid
    const keyBoard = req.body.keyboard;
    const mouse = req.body.mouse;
    const headphones = req.body.headphones;
    const monitor = req.body.monitor;
    const chair = req.body.chair;
    console.log(req.body)

    db.query('INSERT into gears(User_ID, keyboard, Gaming_Mouse, headset, monitor, chair)  VALUES (?,?,?,?,?,?)', [userid, keyBoard, mouse, headphones, monitor, chair],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.post('/Customorderpay', (req, res) => {
    console.log("reachin post req")
    const userid = req.body.userid;
    const email = req.body.email;
    const address = req.body.address;
    const rigtype = req.body.rigtype;
    const payment = req.body.payment;
    console.log(req.body)

    db.query('INSERT into order_payment(User_ID, email, address,rig_type, payment)  VALUES (?,?,?,?,?)', [userid, email, address, rigtype, payment],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.post('/letstalk', (req, res) => {
    console.log("reachin post req")
    const names = req.body.names
    const email = req.body.email;
    const message = req.body.message;
    console.log(req.body)

    db.query('INSERT into contact_us(Names, Email,message) VALUES (?,?,?)', [names, email, message],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})

app.post('/adminlog', (req, res) => {
    console.log("reachin post req")
    const User_ID = req.body.userid;
    const Password = req.body.password;
    console.log(req.body)

    db.query('INSERT into admin_log(User_ID, Password) VALUES (?,?)', [User_ID, Password],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})


app.post('/CREDAdd', (req, res) => {
    console.log("reachin post req")
    const Product_ID = req.body.productid;
    const Usage_type = req.body.usagetype;
    const configuration = req.body.configuration;
    const price = req.body.price;
    console.log(req.body)

    db.query('INSERT into credop(Product_ID, Usage_type, Configuration, Price) VALUES (?,?,?,?)', [Product_ID, Usage_type, configuration, price],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})

app.delete('/CREDdelete/:productid', (req, res) => {

    const productid = req.params.productid;

    db.query('DELETE FROM credop WHERE  Product_ID=?', [productid], (error, result) => {
        if (error) { console.log(error) }
        else {
            res.send(result)
        }
    })
})

app.put('/CREDupdate', (req, res) => {
    console.log("reachin post req")
    const productid = req.body.productid;
    const usagetype = req.body.usagetype;
    const configuration = req.body.configuration;
    const price = req.body.price;
    console.log(req.body)
    db.query("UPDATE credop SET Usage_type=?, Configuration=?, Price=? WHERE Product_ID=?", [usagetype, configuration, price, productid],
        (err, result) => {
            if (err) { console.log(err) }
            else {
                res.send("inserted into table")
            }
        }
    )
})




app.get('/CustombuildgearsOrderDetails/', (req, res) => {
    var respData = [];
    console.log(typeof (data1))
    db.query("Select * From custom_build where user_ID = '" + req.query.userid + "'",
        (err, result) => {
            if (err) { console.log(err) }
            else {
                respData.push({
                    key: 'data1',
                    value: result
                })
            }
        }
    )
    db.query("Select * From gears where User_ID = '" + req.query.userid + "'",
        (err, result) => {
            if (err) { console.log(err) }
            else {
                respData.push({
                    key: 'data2',
                    value: result
                })
                // res.send(respData)
            }
        }
    )
    db.query("Select * from prerec_order where User_ID = '" + req.query.userid + "'",
        (err, result) => {
            if (err) { console.log(err) }
            else {
                respData.push({
                    key: 'data3',
                    value: result
                })
                res.send(respData)
            }
        }
    )



})


app.listen(3001, () => {
    console.log('server running on 3001');
})