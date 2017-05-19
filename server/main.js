import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';


Meteor.startup(function () {

});






// class Person {
//     constructor(name = 'Anonymous', age = 0) {
//         //super(props);
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting() {
//         //return 'Hi! I am ' + this.name + '.';
//         return `Hi! I am ${this.name}`;  // template strings
//     }
//
//     getPerson() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }
//
// class Employee extends Person {
//     constructor(name, age, title) {
//         super(name, age);
//         this.title = title;
//     }
//
//     getGreeting() {
//         if(this.title) {
//             return `Hi! I am ${this.name}. I work as a ${this.title}.`;
//         } else {
//             return super.getGreeting();
//         }
//     }
//     hasJob() {
//         return !!this.title;
//     }
//
// }
//
// let me = new Employee('Mike', undefined, undefined);
// //console.log(me.getPerson());
// console.log(me.hasJob());