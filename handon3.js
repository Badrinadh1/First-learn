const studentdetails={
    name:"jonny",
    age:25,
    grade:"A",
    city:"New York"};

const favoriteSubjects=["Math","Science","History","telugu","english"];

console.log("Student Details:");
for (let key in studentdetails){
    console.log(`${key}:${studentdetails[key]}`);
}
for (let subject of favoriteSubjects){
    console.log(`Favorite Subject:${subject}`);
}
