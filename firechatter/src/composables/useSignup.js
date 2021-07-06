import { ref } from 'vue';
import { projectAuth } from '../firebase/config';
const error = ref('');

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if (!res) throw new Error('Could not complete signup');
    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch (err) {
    console.log(er.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
