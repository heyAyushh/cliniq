<template>
  <div class="hello">
    <main role="main">
  
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron" fluid>
        <div class="container" fluid>
          <h1 class="display-1">Cliniq</h1>
          <p>Skip the Queue / </p>
          
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
  
      <div class="container">
        <!-- Example row of columns -->
        
        <div class="row">
          <div class="col-md-12 text1">
              <p>Cliniq is bsed on next generation health care IT solution designed to help the patients to get rid of queue, to find the right doctor, book an appoinment using QR scanner and payment procedures via paytm. We are aiming transaction from paper to electronic health records.</br></br><strong> Get Informed, Get Inspired</strong> </br><blockquote>As your health is our concern!</blockquote></p></br></br>
              <p>क्लिनक अगली पीढ़ी की स्वास्थ्य सेवा पर आधारित है, जिसका समाधान मरीजों को कतार से छुटकारा दिलाने में मदद करने के लिए बनाया गया है, सही चिकित्सक को खोजने के लिए, क्यूआर स्कैनर और पेटीएम के माध्यम से भुगतान प्रक्रियाओं का उपयोग कर एक अपॉइंटमेंट बुक करें। हम कागज से इलेक्ट्रॉनिक स्वास्थ्य रिकॉर्ड में संक्रमण का लक्ष्य बना रहे हैं। </br></br><strong>प्रेरित हो जाओ, अपने स्वास्थ्य हमारी चिंता के रूप में सूचित हो जाओ!</strong>
<blockquote>अपने स्वास्थ्य के रूप में प्रेरित हमारी चिंता है!</blockquote></p>
          </div>
          <div class="col-md-4 part">
            <h2>Patients</h2>
                        <blockquote>Get Started!</blockquote>

            <router-link tag="li" to="/patient">
              <p><a class="btn btn-secondary" role="button">Click Here &raquo;</a></p>
            </router-link>
          </div>
          <div class="col-md-4 part">
            <h2>Doctors</h2>
                        <blockquote>Get Started!</blockquote>

            <router-link tag="li" to="/doctor">
              <p><a class="btn btn-secondary" href="#" role="button">Click Here &raquo;</a></p>
            </router-link>
          </div>
          <div class="col-md-4 part">
            <h2>Chemist</h2>
            <blockquote>Get Started!</blockquote>
            <router-link tag="li" to="/chemist">
              <p><a class="btn btn-secondary" href="#" role="button">Click Here &raquo;</a></p>
            </router-link>
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
  export default {
    name: 'hello',
    data() {
      return {}
    }
  }
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
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #35495E;
  }
  .text1{
    font-size: 23px;
  }
  .part{
    padding: 15px;
    margin-top: 65px;
  }
</style>