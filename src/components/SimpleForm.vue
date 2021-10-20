<template>
  <section>
    <div class="conainer">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="fullName">Full Name : </label>
          <input type="text" id="fullName" v-model="fullName" />
        </div>

        <div class="form-group">
          <label for="email">E-MAIL : </label>
          <input type="email" id="email" v-model="email" />
        </div>

        <div class="form-group">
          <label for="massege">Massege : </label>
          <textarea id="massege" rows="5" v-model="massege"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
import { projectFirestore } from "../firebase/config";
export default {
  data() {
    return {
      fullName: '',
      email: '',
      massege: '',
    };
  },
  methods: {
    handleSubmit() {
      let userMessage = {
        fullName: this.fullName,
        email: this.email,
        massege: this.massege,
      };
      projectFirestore.collection('userMessages').add(userMessage)
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
}
section {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 500px;
  box-shadow: 0px 0px 20px #57565633;
}
.container {
  width: 500px;

  margin: 0 auto;
  padding: 20px;

  border-radius: 8px;
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.form-group input,
.form-group textarea {
  width: 500px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
button {
  width: 200px;
  border: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}
.ffffff {
  margin-top: 70px;
  margin-right: 1500px;
}
</style>
