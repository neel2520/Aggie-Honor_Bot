import sys

from groupy import Client
client = Client.from_token(sys.argv[2])

groups = list(client.groups.list_all())

myGroup = ""
flag = False

for group in groups:
    if group.id == sys.argv[1]:
        myGroup = group
        flag = True

if(flag):
    messages = list(myGroup.messages.list_all())
    for i in range(len(messages)):
        if i == len(messages)-1:
            print(str(messages[i].name) + '88888' + str(messages[i]),end="")
        else:
            print(str(messages[i].name) + '88888' + str(messages[i].text) + '77777',end="")
