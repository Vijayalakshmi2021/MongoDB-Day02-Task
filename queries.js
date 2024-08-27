//1. Find all the topics and tasks which are thought in the month of October?
 db.Topics.find({ date : {$regex : "2020-10-"}});
 db.Tasks.find({ date : {$regex : "2020-10-"}});

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020?
  db.Company_Drives.find({
    drive_date : { $gte : "2020-10-15", $lte : "2020-10-31"}
  });

//3. Find all the company drives and students who are appeared for the placement.?
db.Company_Drives.aggregate([
    {$project : {
        _id : 0,
        drive_name : 1,
        drive_date : 1,
        students : 1
    }}
    ]);
// 4.Find the number of problems solved by the user in codekata?  
db.Codekata.aggregate([
    {$project : {
        _id : 0,
        user_id : 1,
        user_name : 1,
        total_problems_solved : 1
    }},
    { $sort : { total_problems_solved : -1} }
    ]);

// 5. Find all the mentors with who has the mentee's count more than 15?
    db.Mentors.find({mentees_count:{$gt:15}})

//6. Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020 ?
  db.Attendance.find({
    date:{$gt: "2020-10-15", $lt: "2020-10-31"},
    task_submission : {$regex : "failed"}
  }).forEach(function(value){
    print("Name : "+value.user_name);
    print("Attendance :"+value.attendance);
    print("Task : "+value.task_submission)
});