const ACCESS_TOKEN = 'NyJMui4CjBxQy9gUKK2lgca227DWsztrc97yzwGv';
var USER_ID = "81946993";

var API = require('groupme').Stateless;
var hotWords = ["the answer is", "multiple choice", "how was the test",
    "pictures of problems", "did you get",
    "do you have any pictures", "what was on"];

var IStream = require('groupme').IncomingStream;

API.Users.me(ACCESS_TOKEN, (err, ret) => {
    if (!err) {
        USER_ID = ret.id;
        console.log(USER_ID);
    }
});

API.Messages.create(ACCESS_TOKEN, "57206086", { message: { text: "I'm watching you..." } }, (err, res) => {
    if (err) {
        console.log("Message Error!");
    } else {
        console.log("Reply Message Sent!");
    }
});

var listener = new IStream(ACCESS_TOKEN, USER_ID);

listener.on("connected", function () {
    console.log("Connected Successfully.");
});


//Listener for incoming messages
var flagEval = false;
var dumbass = null;

listener.on("message", function (msg) {
    if (msg && msg.data && msg.data.subject && msg.data.subject.text && msg.data.subject.group_id) {
        dataToDB = { group_id: msg.data.subject.group_id, messageid: msg.data.subject.id, text: msg.data.subject.text };
        console.log("Message received:", dataToDB.text);
        console.log(dataToDB);
        for (var i = 0; i < hotWords.length; i++) {
            if ((dataToDB.text).search(hotWords[i]) == -1) {
                flagEval = true;
                dumbass = msg.data.subject.user_id;
                break;
            }
        }
        if(flagEval)
            var process = spawn("python",["sendAllBut.py", dataToDB.group_id, dumbass]);
    }
});

listener.connect();

