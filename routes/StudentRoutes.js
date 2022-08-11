const e = require('express');
const express = require('express');
const router = express.Router();

const Student = require('../models/Student')

router.post('/', async (req, res) => {
    res.json('Welcome to students data');
})

router.post('/create', async (req, res) => {
    let {name, email, phoneNumber, Age, isStudent, highestQualification, interests} = req.body;

    const student = new Student({
        name, email, phoneNumber, Age, isStudent, highestQualification, interests
    });

    student.save(function (err, document){
        if(err) {
            return res.json({"message": "failed to create"});
        }
        else{
            return res.json({"message": "success" ,name, email, phoneNumber, Age, isStudent, highestQualification, interests} )
        }
    })
})


router.post('/update', async (req, res) => {
    let {_id, name, email, phoneNumber, Age, isStudent, highestQualification, interests} = req.body;

    const studentup = await Student.findOne({ _id });

    studentup.name = name;
    studentup.email = email;
    studentup.phoneNumber = phoneNumber;
    studentup.Age = Age;
    studentup.isStudent = isStudent;
    studentup.highestQualification = highestQualification
    studentup.interests = interests;

    studentup.save(function (err, document){
        if(err){
            console.log(err);
            return res.json({"message": "not updated"})
        }
        else{
            return res.json({"message": "success", name, email, phoneNumber, Age, isStudent, highestQualification, interests})
        }
    })
})

router.get('/get/:_id', async(req, res) => {
    let id = req.params._id;

    const studentFind = await Student.findOne({ id });
    name = studentFind.name,
    email = studentFind.email,
    phoneNumber = studentFind.phoneNumber,
    Age = studentFind.Age,
    isStudent = studentFind.isStudent,
    highestQualification = studentFind.highestQualification,
    interests = studentFind.interests


    if(studentFind){
        return res.json({"message": "success", name, email, phoneNumber, Age, isStudent, highestQualification, interests})
    }

})

router.delete('/delete', async (req, res) => {
    let {_id} = req.body;

    Student.deleteOne({ _id}, function (err){
        if(err) {
            return res.json({"message": "error"});
        }
        else{
            return res.json({"message": "success", "data" : "Document deleted successfully"})
        }
    })
})

module.exports = router;