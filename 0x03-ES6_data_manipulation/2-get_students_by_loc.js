export default function getStudentsByLocation(listOfStudents, city) {
  if (listOfStudents.constructor !== Array) {
    return [];
  }
  return listOfStudents.filter((item) => item.location === city);
}
