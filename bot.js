const ACCESS_TOKEN = 'NyJMui4CjBxQy9gUKK2lgca227DWsztrc97yzwGv';



let USER_ID = "81946993";

var API = require('groupme').Stateless;

var IStream = require('groupme').IncomingStream;

API.Users.me(ACCESS_TOKEN, (err,ret) => {
    if (!err) {
        USER_ID = ret.id;
        console.log(USER_ID);
    }
});




var listener = new IStream(ACCESS_TOKEN, USER_ID);

var DMResponse = function(msg) {
    //Respond accordingly
};

var GroupMessageResponse = function(msg) {
    //SAVE INFO TO DATA BASE
}

listener.on("connected", function() {
    console.log("Connected Successfully.");
});

//Listener for incoming messages
listener.on("message", function(msg) {
    if(msg && msg.data && msg.data.subject && msg.data.subject.text) {
        if (msg.data) {
            console.log(msg);
        }
        console.log("Message received:", msg);
    }
});

listener.connect();

