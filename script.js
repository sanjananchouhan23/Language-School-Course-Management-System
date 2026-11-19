
function showMessage() {
    alert("Welcome to LinguaHub! Happy Learning!");
}


function showDate() {
    let today = new Date();

    document.getElementById("date").innerHTML =
    "Today's Date: " + today.toDateString();
}


function searchCourses() {

    let searchText = document.getElementById("searchBox").value.toLowerCase();

    let courses = document.getElementsByTagName("h3");

    for (let i = 0; i < courses.length; i++) {

        let courseName = courses[i].innerHTML.toLowerCase();
        let description = courses[i].nextElementSibling;

        if (courseName.includes(searchText)) {
            courses[i].style.display = "block";
            description.style.display = "block";
        }
        else {
            courses[i].style.display = "none";
            description.style.display = "none";
        }
    }
}


function showCourseDetails(course) {

    if (course == "English") {
        alert("English Course\nDuration: 3 Months\nLevel: Beginner to Advanced");
    }

    else if (course == "French") {
        alert("French Course\nDuration: 3 Months\nLevel: Beginner to Advanced");
    }

    else if (course == "German") {
        alert("German Course\nDuration: 3 Months\nLevel: Beginner to Advanced");
    }

    else if (course == "Spanish") {
        alert("Spanish Course\nDuration: 3 Months\nLevel: Beginner to Advanced");
    }

    else if (course == "Japanese") {
        alert("Japanese Course\nDuration: 3 Months\nLevel: Beginner to Advanced");
    }
}
