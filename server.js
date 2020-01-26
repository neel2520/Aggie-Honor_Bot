<<<<<<< Updated upstream
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
let AUTH_ID = null;
app.set("view engine","pug");
app.use(cookieParser());

const AUTH_URL = "https://oauth.groupme.com/oauth/authorize?client_id=TEEuXmjuhBrBGqdnegjpNruVkG8LAUaqArVCmQrjSyBIwUWU";

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        url: AUTH_URL
    });
});

app.get("/auth", (req, res) => {
    console.log("Found access token:",req.query.access_token);
    res.cookie("access_token",req.query.access_token)
    res.redirect("/dashboard");
})

app.get("/dashboard", (req, res) => {
    if(req.cookies.access_token == null) {
        res.redirect("/");
    }
    res.render("dashboard", {
        title: "Dashboard",
        name: req.cookies.access_token
    })
})

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
})
=======
const ACCESS_TOKEN = 'NyJMui4CjBxQy9gUKK2lgca227DWsztrc97yzwGv';
var USER_ID = "81946993";

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
var spawn = require("child_process").spawn;
let AUTH_ID = null;
let API = require("groupme").Stateless;

app.set("view engine","pug");
app.use(cookieParser());

const AUTH_URL = "https://oauth.groupme.com/oauth/authorize?client_id=TEEuXmjuhBrBGqdnegjpNruVkG8LAUaqArVCmQrjSyBIwUWU";

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        url: AUTH_URL
    });
});

app.get("/auth", (req, res) => {
    console.log("Found access token:",req.query.access_token);
    res.cookie("access_token",req.query.access_token);
    res.redirect("/dashboard");
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    });
})

app.get("/dashboard", (req, res) => {
    if(req.cookies.access_token == null) {
        res.redirect(AUTH_URL);
    }
    
    API.Groups.index(req.cookies.access_token, (err,ret) => {
        if (err){
            console.log("Error couldn't get groups");
        }
        else{
            var current_group = null;
            var groups = [];
            for (group of ret) {
                if(group.id === req.query.group) {
                    current_group = group;
                }
                groups.push({"id": group.id,"name":group.name,"image":group.image_url});
            }
            var messages = [];
            if(current_group){
                var process = spawn("python",["grabGroupMessages.py",current_group.id]);
                process.stdout.on("data", (data) => {
                    lines = data.toString().split("77777");
                    message = [];
                    for(line of lines) {
                        message.push(line.split("88888"));
                    }
                    message = message.splice(0,message.length-1);
                    for (msg of message) {
                        messages.push({"name":msg[0],"text":msg[1]});
                    }
                    console.log(messages);
                });
            }
            res.render("dashboard", {
                title: "Dashboard",
                groups: groups,
                messages: messages
            });
        }
    });
});

const server = app.listen(7000, () => { 
    console.log(`Express running → PORT ${server.address().port}`);
});
>>>>>>> Stashed changes
