import { ref } from 'vue';
import { projectAuth } from '../firebase/config';
const error = ref(null);

const logout = async() => {
  error.value = null;

  try{
    await projectAuth.signOut();
  } catch(err) {
    console.log(err);
    error.value = error.message;
  }
}

const useLogout = () => {
  return {logout, error};
}

export default useLogout;