

// let scores1 = [120, 24, 121, 4];
// let scores2 = [...scores1];
// scores2[0] = 9999;
// console.log(scores1);
// console.log(scores2);

// copy wrongly
// let student2 = student1;
// copy method 1
// let student2 = JSON.parse(JSON.stringify(student1));
// copy method 2
let student1 = {
    age: 20,
    name: "james",
    password: "P@ssw0rd",
    location: {
        lat: 20,
        lng: 114
    }
};
let student2 = {
    beforeNickname: "before dickjai",
    ...student1,
    password: null,
    location: { ...student1.location },
    afterNickname: "after dickjai",
};

// let student3 = { ...student2 }
// delete student3.password
// delete student3.beforeNickname
// delete student3.afterNickname
// let beforeNickname = 123
let { beforeNickname: _, afterNickname: __, password: ___, ...student3 } = student2

// let bName = student2.beforeNickname

// student2.name = "studetn 2 :dickson";
student1.location.lat = 99
console.log(student1);
console.log(student2);
