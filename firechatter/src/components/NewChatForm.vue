<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
  import { ref } from 'vue';
  import { timestamp } from '../firebase/config';
  import getUser from '../composables/getUser';
  import useCollection from '../composables/useCollection';

  export default {
    setup() {
      const { user } = getUser();
      const { error, addDoc } = useCollection('messages');

      const message = ref('');

      const handleSubmit = async () => {
        const chat = {
          message: message.value,
          user: user.value.displayName,
          createdAt: timestamp(),
        };

        await addDoc(chat);
        if (!error) message.value = '';
      };

      return { message, handleSubmit, error };
    },
  };
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-botton: 6px;
    padding: 10px;
    box-sizing: 10px;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>
