/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name": "Andrew Zheng",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "631-741-2474",
		"email": "xian0831@gmail.com",
		"github": "xian0831",
        "location": "Union City, NJ"
	},
	"bioPic": "images/profile.png",
	"WelcomeMessage": "welcome to my home page",
	"skills": [
		"Java","HTML5","CSS","JavaScript","SQL"
	]
};

var work = {
	"jobs": [
		{
			"employer": "Prudential Financial",
			"title": "System Development Analyst",
			"location": "Newark, NJ",
			"dates": "08/2014 - Current",
			"description": "I analyze manual operation procedure and implement automation process to improve operation efficiency using Java and Bash in Linux(RHEL 6.5)."
		},
		{
			"employer": "Citigroup",
			"title": "Technology Analyst",
			"location": "New York, NY",
			"dates": "06/2013 - 06/2014",
			"description": "Developed reusable GUI components (list, table and chart) in GWT(Java). It allowed other team members to concentrate on adding business features."
		}
	]
};

var education = {
	"schools" : [
		{
			"name": "Syracuse University",
			"city": "Syracuse, NY",
			"degree": "Masters (In Progress)",
			"major": "Computer Science",
			"graduation": "May 2017",
			"url": "http://www.syr.edu/"

		},
		{
			"name": "Stony Brook University",
			"city": "Stony Brook, NY",
			"degree": "BS",
			"major": "Computer Science",
			"graduation": "Dec 2013",
			"url": "http://www.stonybrook.edu/"
		}
	],
	"onlineCourses": [
        {
            "title": "Intro to JavaScript",
            "school": "Udacity",
            "dates": "07/2015 - Current",
            "url": "https://www.udacity.com/"
        }

    ]

};

var projects = {
	"projects": [
		{
			"title": "Lunch Buddy",
			"dates": "01/2015 - 05/2015",
			"description": "school project"
		}
	]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
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

    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
};

work.display = function() {
    for(var job in work.jobs){
        //create a new div for work experience entry
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location)
        var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);


        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDate);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for(var project in projects.projects){
        //Create a new div for projects
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if(projects.projects[project].image > 0) {
            for(image in projects.projects[project].image) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    for(var school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedSchoolCity = HTMLschoolLocation.replace("%data%",education.schools[school].city);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        var formattedSchoolGraduation = HTMLschoolDates.replace("%data%",education.schools[school].graduation);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolGraduation);
        $(".education-entry:last").append(formattedSchoolCity);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    for(course in education.onlineCourses){

        var formattedOnlineCourse = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school)
        var formattedOnineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedOnineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineCourse + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnineDate);
        $(".education-entry:last").append(formattedOnineURL);
    }
};



//Display function for each session
bio.display();
work.display();
projects.display();
education.display();


//Helper function to get internationalized name
function inName(name) {
    name = name.trim().split(" ");
    var firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1);
    var lastName = name[1].toUpperCase();

    return firstName + " " + lastName;
}
//
//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);