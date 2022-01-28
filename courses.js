const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: "TTh", instructor: "Bro T"},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: "TTh", instructor: "Sis A"}

    ]
};

function nameAndCode(course){
    document.querySelector("#courseName").textContent = course.name
    document.querySelector("#courseCode").textContent = course.code
}

function renderSections(sections) {
    const html = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>`
    );

    document.querySelector("#sections").innerHTML = html.join("");

}

changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex
    ((section) => section.sectionNum == sectionNum);
    if (sectionIndex >=0) {
        if (add) {
            this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
        }
            else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        
    }
}

dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex( (section) => section.sectionNum == sectionNum)
    ;
    if (sectionIndex >= 0) {
        this.section[sectionIndex].enrolled--;
        renderSections(this.sections);
    }
}


nameAndCode(aCourse);

renderSections(aCourse.sections);