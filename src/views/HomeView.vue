<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { Image } from "@unpic/vue";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "chatroom" });
    };

    return { showLogin,enterChat };
  },
};
</script>

<template>
  <div class="welcome container">
    <p class="title">Vue.js - Chatroom demo</p>
    <img src="/icon.png" alt="icon" width="50" height="50" />
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        Dont't have an account? <span @click="showLogin = false">Signup</span>
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat"/>
      <p>
        Already have an account? <span @click="showLogin = true">Login</span>
      </p>
    </div>
  </div>
</template>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.title {
  margin-bottom: 20px
}
.welcome h2 {
  font-size: 2rem;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
.welcome img {
  margin: 20px;
}
</style>
