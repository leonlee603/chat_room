<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Logging in...</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";

export default {
  setup(props, context) {
    const { error, isPending, login } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      // console.log(email.value, password.value);
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style></style>
