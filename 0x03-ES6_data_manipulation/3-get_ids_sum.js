export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((pre, curr) => (typeof pre === 'object' ? pre.id + curr.id : pre + curr.id));
}
