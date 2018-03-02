// Defined Module Import
const { Event } = require('./../models//events');
const { Notifications } = require('./../models/notification');
const { StudentPrimary } = require('./../models/studentPrimary');
const { StudentSecondry } = require('./../models/studentsSecondry');
const { TeacherPrimary } = require('./../models/teacherPrimary');
const { Syllabus } = require('./../models/syllabus');
const { TimeTable } = require('./../models/timeTable');

const {
  giveLatestThreeItem,
  // giveUser,
  giveAll,
  giveAllSecondary,
} = require('./../utils/utils');

// Initializing the Instances of Model
const giveLatestThreeNotifications = giveLatestThreeItem(Notifications);
const giveAllNotifications = giveAll(Notifications);
const giveLatestThreeEvents = giveLatestThreeItem(Event);
// const giveStudent = giveUser(StudentPrimary);
// const giveTeacher = giveUser(TeacherPrimary);
const giveAllSyllabus = giveAll(Syllabus);
const giveAllTimeTable = giveAll(TimeTable);
const giveAllEvents = giveAll(Event);
const giveAllStudentSecondary = giveAllSecondary(StudentSecondry);

const getLatestNotifications = async (req, res) => {
  try {
    const notifications = await giveLatestThreeNotifications();
    res.send(notifications);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await giveAllNotifications();
    res.send(notifications);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getLatestEvents = async (req, res) => {
  try {
    const events = await giveLatestThreeEvents();
    res.send(events);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getStudent = async (req, res) => {
  const { slugg } = req.body;
  try {
    const student = await giveStudent(slugg);
    res.send(student);
  } catch (error) {
    res.send(`Something Went Wrong: ${error}`);
  }
};

const getTeacher = async (req, res) => {
  const { slugg } = req.body;
  try {
    const teacher = await giveTeacher(slugg);
    res.send(teacher);
  } catch (error) {
    res.send(`Something Went Wrong: ${error}`);
  }
};

const getSyllabus = async (req, res) => {
  try {
    const syllabus = await giveAllSyllabus();
    res.send(syllabus);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getTimeTable = async (req, res) => {
  try {
    const timeTable = await giveAllTimeTable();
    res.send(timeTable);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await giveAllEvents();
    res.send(events);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getAllStudentSecondaryData = async (req, res) => {
  const { _creator } = req.body;
  try {
    const secondarydata = await giveAllStudentSecondary(_creator);
    res.send(secondarydata);
  } catch (error) {
    res.status(401).send(`Some error happened: ${error}`);
  }
};

// const searchStudents = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const searchResults = await findStudents(name);
//   } catch (error){
//     res.status(401).send(`Some error happened: ${error}`);

//   }
// };

module.exports = {
  getLatestNotifications,
  getAllNotifications,
  getLatestEvents,
  getStudent,
  getTeacher,
  getSyllabus,
  getTimeTable,
  getAllEvents,
  getAllStudentSecondaryData,
  // searchStudents,
};
