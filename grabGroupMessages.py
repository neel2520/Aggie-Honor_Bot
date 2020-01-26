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

if(flag):
    messages = list(groups[0].messages.list_all())
    for i in range(len(messages)):
        if i == len(messages)-1:
            print(str(messages[i].name) + '88888' + str(messages[i].text),end="")
        else:
            print(str(messages[i].name) + '88888' + str(messages[i].text) + '77777',end="")