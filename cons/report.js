function StudentDetail(name, roll_no, clas, section, marks) {
  this.name = name;
  this.roll_no = roll_no;
  this.clas = clas;
  this.section = section;
  this.marks = marks;

  this.top3student = function() {
    
    const students = [
      { name: "abc", roll_no: 1, clas: "x", section: "A", marks: [72, 75, 76, 79, 80] },
      { name: "pqr", roll_no: 2, clas: "x", section: "B", marks: [70, 55, 46, 99, 81] },
      { name: "tbw", roll_no: 3, clas: "x", section: "C", marks: [62, 58, 64, 90, 87] },
      { name: "ccc", roll_no: 4, clas: "x", section: "A", marks: [88, 78, 56, 79, 65] },
      { name: "www", roll_no: 5, clas: "x", section: "B", marks: [99, 99, 99, 99, 99] }
    ];

    students.sort((a, b) => b.marks.reduce((sum, mark) => sum + mark, 0) - a.marks.reduce((sum, mark) => sum + mark, 0));

    
    console.log("Top 3 Students:");
    for (let i = 0; i < Math.min(3, students.length); i++) {
      console.log(`${i + 1}. Name: ${students[i].name}, Roll No: ${students[i].roll_no}, Total Marks: ${students[i].marks.reduce((sum, mark) => sum + mark, 0)}`);
    }
  };

  this.reportcard = function() {
    console.log("+--------------------------+");
    console.log("|       Report Card        |");
    console.log("+--------------------------+");
    console.log("| Name: " + this.name);
    console.log("| Roll No: " + this.roll_no);
    console.log("| Class: " + this.clas);
    console.log("| Section: " + this.section);
    console.log("| Marks: " + this.marks.join(", "));
    console.log("+--------------------------+");
  };
}

let student1 = new StudentDetail("abc", 1, "x", "A", [72, 75, 76, 79, 80]);
let student2 = new StudentDetail("pqr", 2, "x", "B", [70, 55, 46, 99, 81]);
let student3 = new StudentDetail("tbw", 3, "x", "C", [62, 58, 64, 90, 87]);
let student4 = new StudentDetail("ccc", 4, "x", "A", [88, 78, 56, 79, 65]);
let student5 = new StudentDetail("www", 5, "x", "B", [99, 99, 99, 99, 99]);


student1.top3student();
student1.reportcard();

