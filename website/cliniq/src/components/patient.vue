<template>
  <div class="hello">
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
<b-jumbotron>
  <template slot="header">
    cliniq - Patient
  </template>
  <template slot="lead">
    Book an appointment at nearby clinic. 
  </template>
</b-jumbotron>

  <hr class="my-4">
  <p>
Stand out of the queues. Get a token with a click. Show it to the doctor
  </p>
  <p>
कतारों में खड़े होने से बचें। एक क्लिक के साथ एक टोकन प्राप्त करें। इसे डॉक्टर को दिखाएं</p>
  <b-btn variant="primary" href="https://ayush15649377.typeform.com/to/F1B7SP">Get A token</b-btn>

      <div class="container">
     
      </div>
   <hr>
      <!-- /container -->
    </main>

    <footer class="container">
      <p>&copy; Team undefined</p>
    </footer>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "hello",
  data() {
    return {

    };
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.jumbotron {
  padding: 30px;
  margin-left: 50px;
  margin-right: 50px;
  font-kerning: auto;
}

h1,
h2 {
  font-weight: normal;
}

h3 {
  text-align: center;
  margin-top: 40px;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}

</style>
