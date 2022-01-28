function getGrades(inputSelector) {

    //gets grades from input area
    const grades = document.querySelector("#grades").value;

    //divides them and puts them into an array called grades
    let gradesArray = grades.split(',');

    //maps through each item and trims spaces and converts to uppercase
    // cleanGrades = gradesArray.map(function(grade) {
    //     return grade.trim().toUppercase()
    // });

    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    
    return cleanGrades

  }
  
  function lookupGrade(grade) {

    let gpaPoints = 0;
    // converts the letter grade to it's GPA point value and returns it
    if (grade.toUppercase() === "A") {
        gpaPoints = 4.0
    }

    else if (grade.toUppercase() === "B") {
        gpaPoints = 3.0
    }

    else if (grade.toUppercase === "C") {
        gpaPoints = 2.0
    }

    else if (grade.toUppercase === "D") {
        gpaPoints = 1.0
    }

    return gpaPoints
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    const gradePoints = grades.map((grade) => lookupGrade(grade));

    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;

    return gpa.toFixed(2);

  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    let outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
    const grades = getGrades();

    const gpa = calculateGpa(grades);

    outputGpa(gpa, "#output");

    
  }

  document.querySelector("#submitBUtton").addEventListener("click", clickHandler);