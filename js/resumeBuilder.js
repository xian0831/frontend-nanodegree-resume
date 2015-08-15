/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%","Andrew")
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Andrew Zheng",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "631-741-2474",
		"email": "xian0831@gmail.com",
		"github": "xian0831"
	},
	"bioPic": "images/fry.jpg",
	"WelcomeMessage": "welcome to my home page",
	"skills": [
		"java","HTML5","JavaScript"
	]
}

var work = {
	"jobs": [
		{
			"employer": "Prudential Financial",
			"title": "System Development Analyst",
			"location": "Newark NJ",
			"dates": "08/2014 - Current",
			"description": "Develop program."
		},
		{
			"employer": "Citigroup",
			"title": "Technology Analyst",
			"location": "New York NY",
			"dates": "06/2013 - 06/2014",
			"description": "Develop program."
		}
	]
}

var education = {
	"schools" : [
		{
			"name": "Syracuse University",
			"city": "Syracuse, NY",
			"degree": "Masters",
			"major": "CompSci",
			"graduation": "May 2017",
			"url": "http://www.syr.edu/"
		},
		{
			"name": "Stony Brook University",
			"city": "Stony Brook, NY",
			"degree": "BS",
			"major": "CompSci",
			"graduation": "Dec 2013",
			"url": "http://www.stonybrook.edu/"
		}
	],
	"onlineCourses": [
        {
            "title": "Intro to JavaScript",
            "school": "Udacity",
            "dates": "07/2015",
            "url": "https://www.udacity.com/"
        }

    ]

}

var projects = {
	"projects": [
		{
			"title": "Lunch Buddy",
			"dates": "01/2015 - 05/2015",
			"description": "school project"
		}
	]
}


var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.hasOwnProperty("skills") || bio.skills.length>0){

    $("#header").append(HTMLskillsStart);
    var index;
    for(index=0;index<bio.skills.length;index++){
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[index]);
        $("#skills").append(formattedSkills);
    }

}

if (work.hasOwnProperty("jobs") || bio.skills.length>0){

    displayWork();
}

function displayWork() {
    for(job in work.jobs){
        //create a new div for work experience entry
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDate);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
