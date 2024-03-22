const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/curricularActivity")

.then(() => console.log("database connected successfully"))

.catch((e) => console.log("not connected", e));

const StudentSchema = new mongoose.Schema({
    id: String,

    name: String,

    activityType: String,

    duration: String,

    achievements: String
});

// //crud----create, read, update and delete

const StudentRecord = new mongoose.model("StudentRecord", StudentSchema);

// //create document

const Student1data = new StudentRecord({
    id: 11,

    name: "Bhaskar",

    activityType: "Running",

    duration: "1hr",

    achievements: "State 1sr rank"
});
Student1data.save();

//asyn await

const createDocument = async() => {
    try {
        const allData = await StudentRecord.create([{
                Id: 12,

                Name: "Jamma",

                activityType: "kabaddi",

                duration: "1hr",

                achievements: "School 1st rank",
            },

            {
                Id: 13,

                Name: "BhaskarJ",

                activityType: "shotput",

                duration: "1hr",

                achievements: "State 3rd rank",
            },

            {
                Id: 14,

                Name: "JammaBhaskar",

                activityType: "",

                duration: "10min",

                achievements: "district 1st rank"
            }
        ]);
    } catch (e) {
        console.log("error");
    }
};

createDocument();

// // //read/ get data

const getDocument = async() => {
    //const result=await StudentRecord.find();

    const result = await StudentRecord.find({ Name: "Bhaskar" });

    console.log(result);
};

getDocument();