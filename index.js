const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/academicRecords")

.then(() => console.log("database connected successfully"))

.catch((e) => console.log("not connected", e));

const StudentSchema = new mongoose.Schema({
    Id: String,

    Name: String,

    Grade: String,

    subjects: String

});








// //crud----create, read, update and delete

const StudentRecord = new mongoose.model("StudentRecord", StudentSchema);

// //create document

const Student1data = new StudentRecord({
    Id: 11,

    Name: 'Bhaskar',

    Grade: 'A',

    subjects: 'Maths'
});
Student1data.save();

//asyn await

const createDocument = async() => {

    try {

        const allData = await StudentRecord.create([

            {

                Id: 12,

                Name: 'Jamma',

                Grade: 'A+',

                subjects: 'Java'

            },

            {

                Id: 13,

                Name: 'BhaskarJ',

                Grade: 'O',

                subjects: 'Python'

            },

            {

                Id: 14,

                Name: 'JammaBhaskar',

                Grade: 'A',

                subjects: 'Maths'
            }

        ])



    } catch (e) {

        console.log('error');

    }

}

createDocument();

// // //read/ get data

const getDocument = async() => {
    //const result=await StudentRecord.find();

    const result = await StudentRecord.find({ Name: 'Bhaskar' });



    console.log(result);
};

getDocument();