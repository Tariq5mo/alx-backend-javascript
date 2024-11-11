export default function getListStudentIds(arrayObjects) {
  if (!Array.isArray(arrayObjects)) {
    return [];
  }
  return arrayObjects.map((item) => item.id);
}
