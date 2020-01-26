const ACCESS_TOKEN = 'NyJMui4CjBxQy9gUKK2lgca227DWsztrc97yzwGv';
var USER_ID = "81946993";

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
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
    res.render("about", {});
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
});