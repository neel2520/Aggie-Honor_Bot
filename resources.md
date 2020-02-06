# Aggie-Honor-Bot Helpful Resources
### Web Server Basics
**Sessions Basics** (what even is a session?):
https://machinesaredigging.com/2013/10/29/how-does-a-web-session-work/
	Explains in general terms how web servers handle sessions at an abstracted level
### Java Web Server Targeted Information
**Introduction to Java Web Development** (what is the structure of a java webserver and files):
https://www.vogella.com/tutorials/JavaWebTerminology/article.html
A great introduction explaining the moving pieces in a Java web server. This is a great place to start if you want to learn about the basics of the server infrastructure. It contains information on servlets and JavaServer Pages.

**My First Java Web Server** (Oh happy day):
https://www.vogella.com/tutorials/EclipseWTP/article.html
An explanation of a lot of the required tools and a basic webpage utilizing backend logic (counting the number of times a page has been viewed). This is a good introduction to the power of Java as a backend. Shows the basic development of a servlet. Also, how to compile to a .war file. 

**SPA**(single page application): https://javatutorial.net/how-to-build-single-page-application-with-java-ee-and-angular
This is a good example of the logic needed for a dashboard page for viewing the users' group chats and making reports. It shows examples of the javascript making an HTTP Get request to populate a page with data.

**Sessions Implementation** (users not being logged out after every request):
codejava.net/java-ee/servlet/how-to-use-session-in-java-web-application
Talks about how sessions are actually handled in java. This will be extremely important for our product. 

### Server Security
**Session Security** (don't steal me tokens please):
https://hackernoon.com/the-best-way-to-securely-manage-user-sessions-91f27eeef460
How to secure sessions from malicious attackers to protect sensitive information. This will probably be quite important for us if we are still handling the GroupMe auth token, which is highly likely. 
### Angular?/React?/Vue? Front End stuff

### Docker / Load Balancing

### Databases
