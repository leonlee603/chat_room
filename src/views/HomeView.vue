<script>
export default {
  components: { SignupForm },
};
import SignupForm from "@/components/SignupForm.vue";
</script>

<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignupForm />
  </div>
</template>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
