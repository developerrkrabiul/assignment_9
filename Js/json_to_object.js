

const student = '[{"roll":1,"name":"Rk","fatherName":"kk","bn":80,"en":80,"math":80,"s":80},{"roll":2,"name":"Rasel","fatherName":"Ronjon ali","bn":80,"en":50,"math":60,"s":45},{"roll":3,"name":"Arifull","fatherName":"Habibur Rohman","bn":80,"en":70,"math":60,"s":55}]';

const phoneBook = '[{"name":"Rk Rabiul Islam (Razu)","Number":1626761798,"relation":"Own"},{"name":"Sakib Hossain","Number":1878286007,"relation":"Bro"},{"name":"Md Shipon Khan","Number":1673352434,"relation":"Bro"},{"name":"Md Hossain Al Mahmud","Number":1917805868,"relation":"Bro"},{"name":"Abdur Razzak","Number":1787866217,"relation":"Friend"},{"name":"Afran Aisha","Number":1781467171,"relation":"Apu"},{"name":"Faisal Ahmed","Number":1608514801,"relation":"Janina ke ata"},{"name":"Faisal Ahmed","Number":1776362232,"relation":"Cinina"},{"name":"Tohidul Islam","Number":1710470230,"relation":"Cinina"},{"name":"Kota Bondu","Number":1734559700,"relation":"Kota bole beshi"}]';

const deves = '[{"id":1,"name":"rk","location":"Cumilla","skill":"mern stack","salary":500},{"id":2,"name":"Arifull","location":"sirajganj","skill":"Laravel","salary":700},{"id":3,"name":"Raju","location":"Cumilla","skill":"java","salary":1000},{"id":4,"name":"shakil","location":"sherpur","skill":"Django","salary":800},{"id":5,"name":"Ridoy","location":"Chittagong","skill":"Golan","salary":1200},{"id":6,"name":"Rabiul","location":"Cumilla","skill":"WordPress","salary":600}]';

let stuData = JSON.parse(student);
let phonData = JSON.parse(phoneBook);
let devesData = JSON.parse(deves);

console.log(stuData);
console.log(phonData);
console.log(devesData);