export default function getListStudentIds(arrayObjects) {
  if (arrayObjects.constructor !== Array) {
    return [];
  }
  return arrayObjects.map((item) => item.id);
}
