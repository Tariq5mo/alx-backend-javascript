export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
    return queue;
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push('Guardrail was processed');
    return queue;
  }
}
