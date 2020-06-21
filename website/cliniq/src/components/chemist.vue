<template>
  <div class="hello">
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron" fluid>
        <div class="container" fluid>
          <h1 class="display-1">cliniq - Chemist</h1>
          <p>Skip the Queue /</p>
        </div>
      </div>

      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-4">
            <vue-qr-reader v-on:code-scanned="codeArrived"/>

            
          </div>
          <div class="col-md-4">
            <h3>{{code}}</h3>
          </div>
          <div class="col-md-4" v-show="showcar">
              <h1><b>Prescription</b></h1>
                <h3>{{prescription}}</h3>
          </div>
            <div class="col-md-12 text">
                  
                  <p>Scan the respective QR Code that the patient is giving to you ,</br>and supply the medicines prescribed by the Doctor.</p>
                  <p>
संबंधित QR कोड स्कैन करें, जो मरीज आपको दे रहा है,</br>
और डॉक्टर द्वारा निर्धारित दवाओं की आपूर्ति।</p>
                </div>
        </div>
        

        <hr>
      </div>
      <!-- /container -->
    </main>

    <footer class="container">
      <p>&copy; Team undefined</p>
    </footer>
  </div>
</template>



<script>
import VueQrReader from "vue-qr-reader/dist/lib/vue-qr-reader.umd.js";
import axios from "axios";

export default {
  name: "hello",
  data() {
    return {
      prescription: "",
      notes: "",
      code: "",
      showcar: false
    };
  },
  components: {
    VueQrReader
  },
  methods: {
    codeArrived(code) {
      this.code = code;
      this.showcar = true;
      var prescription = this.prescription;
        var query ="{ data(where: {key:{_eq:\""+this.code+"\"}}) {prescription}}";

      axios({
        method: "post",
        url: "https://cliniq-graphql.herokuapp.com/v1alpha1/graphql",
        data: {
          query: query
        }
      })
        .then(data=> { this.prescription=data.data.data.data[0].prescription ; })
        .catch(err => console.error(err));
    }
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
.text p{
  text-align: left;
  font-size: 20px;
}
</style>
