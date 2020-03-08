<template>
  <section>
    <!-- <div class="container"> -->
    <vs-row vs-align="center" vs-type="flex" vs-justify="center">
      <vs-col vs-w="3">
        <h1>Login</h1>
        <form>
          <vs-input
            type="email"
            label="Email"
            name="email"
            size="large"
            v-model="login.email"
            autofocus
          ></vs-input>
          <vs-input
            type="password"
            label="Password"
            name="password"
            size="large"
            v-model="login.password"
          ></vs-input>
          <vs-button size="large" @click.prevent="logIn">Login</vs-button>
        </form>
        <p class="lostPassword">
          <a href>Lost your password? Click here.</a>
        </p>
        <CreateLogin />
      </vs-col>
    </vs-row>
    <!-- </div> -->
  </section>
</template>

<script>
import CreateLogin from "@/components/CreateLogin.vue";
export default {
  name: "Login",
  components: {
    CreateLogin
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    logIn() {
      console.log("Clicou.");
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 10% 0;
  min-height: 200px;
  align-items: center;
}
h1,
div,
p {
  padding-bottom: 10px;
}
h1,
p {
  text-align: center;
}
.vs-input {
  width: 100%;
}
.vs-button {
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>