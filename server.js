<<<<<<< Updated upstream
const ACCESS_TOKEN = 'NyJMui4CjBxQy9gUKK2lgca227DWsztrc97yzwGv';
var USER_ID = "81946993";

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
let AUTH_ID = null;
let API = require("groupme").Stateless;
const people_list = [
    { name: "Rebecca McFadden", pic: "https://avatars2.githubusercontent.com/u/43143866?s=460&v=4", linkedin: "https://www.linkedin.com/in/rebecca-m-601936135/", email: "rmcfadden@tamu.edu", github: "https://github.com/rebeccamcfadden" },
    { name: "Trevor    Bolton", pic: "https://media-exp1.licdn.com/dms/image/C4E03AQEnnCJlx29TDQ/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=Z7WRTqYhCjupjWdgV2tHxqLNb51vKbfi7s6Zx6pdyQg", linkedin: "https://www.linkedin.com/in/trevor-bolton-428158192/", email: "tbolton2000@aol.com", github: "https://github.com/TBolton2000github" },
    { name: "Neel Porchareddy", pic: "https://media-exp1.licdn.com/dms/image/C4E03AQFt7YCFr7mMwg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=_wMWldCdAEJFv2LPwFZ89_0kCE8Dnv3XW-ryRWLZsmw", linkedin: "https://www.linkedin.com/in/neel-pochareddy-02a88518a/", email: "npochareddy6335@gmail.com", github: "https://github.com/neel2520" },
    { name: "Albin (Kyle) Myscich", pic: "https://i.groupme.com/1316x1317.jpeg.dd249735c5c844c2a3363884aa96921a", linkedin: "https://www.linkedin.com/in/albin-myscich-a1b495b4/", email: "akmysisch@hotmail.com", github: "https://github.com/AMyscich" }
];

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

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact Us",
        people: people_list
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
            if(current_group){
                console.log(current_group);
            }
            console.log(groups);
            res.render("dashboard", {
                title: "Dashboard",
                groups: groups
            });
        }
    });
});

const server = app.listen(7000, () => { 
    console.log(`Express running → PORT ${server.address().port}`);
=======
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
>>>>>>> Stashed changes
});