/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%","Andrew")
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Andrew Zheng",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "631-741-2474",
		"email" : "xian0831@gmail.com"
	},
	"bioPic" : "images/fry.jpg",
	"WelcomeMessage" : "welcome to my home page",
	"skills" : [
		"java","HTML5","JavaScript"
	]
}

var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedBioPic);
$("#topContacts").append(formattedWelcomeMsg);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedSkills);





