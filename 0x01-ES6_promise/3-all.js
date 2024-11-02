import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const up = uploadPhoto();
  const userp = createUser();
  return Promise.all([up, userp])
    .then(([photo, name]) => {
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
