#ARGS 1 = groupID, 2 = bad UserID


import sys

from groupy import Client
client = Client.from_token("NyJMui4CjBxQy9gUKK2lgca227DWsztrc97yzwGv")

groups = list(client.groups.list_all())

myGroup = ""
flag = False

for group in groups:
    if group.id == sys.argv[1]:
        myGroup = group
        flag = True

toSendTo = []

if(flag):
    users = myGroup.members
    for user in users:
        if user.user_id != sys.argv[2] and user.user_id != client.user.get_me()["id"]:
            toSendTo.append(user)

for user in toSendTo:
    user.post(text="Possible cheating found in your group, " + myGroup.name + "\nMessage: " + sys.argv[3] +
    "\nTo avoid being considered for academic dishonesty, feel free to leave the chat now.")
