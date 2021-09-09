const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    // id: {
    //     type: String,
    // },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;


// const express = require('express');
//
// const students = [{
//     "id": 1,
//     "first_name": "lalit",
//     "last_name": "sharma",
//     "email": "lalit@gamil.com"
// },
//     {
//         "id": 2,
//         "first_name": "lalit",
//         "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     },
//     {
//         "id": 3,
//         "first_name": "lalit",
//         "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     },
//     {
//         "id": 4,
//         "first_name": "lalit",
//         "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     },
//     {
//         "id": 5,
//         "first_name": "lalit",
//         "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     },
//     {
//         "id": 6,
//         "first_name": "lalit",
//         "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     },
//     {
//         "id": 7,
//         "first_name": "lalit",
//         "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     }
// ]
//
//
// module.exports = students;
