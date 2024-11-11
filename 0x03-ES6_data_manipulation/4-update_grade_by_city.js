export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((item) => item.location === city).map((item) => {
    for (const student of newGrades) {
      if (student.studentId === item.id) {
        Reflect.set(item, 'grade', student.grade);
        return item;
      }
    }
    Reflect.set(item, 'grade', 'N/A');
    return item;
  });
}
