export default function updateUniqueItems(map) {
  if (map.constructor === Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        try {
          map.set(key, 100);
        } catch (error) {
          throw new Error('Cannot process');
        }
      }
    }
    return map;
  }
  throw new Error('Cannot process');
}
