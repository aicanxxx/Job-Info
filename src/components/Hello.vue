<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>-->
    <ul id="index">
      <li class="on"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <!--<nav id="img">
      <li class="opa-on"><img src="../assets/banner1.jpg" alt="img1"></li>
      <li><img src="../assets/banner2.jpg" alt="img2"></li>
      <li><img src="../assets/banner3.jpg" alt="img3"></li>
      <li><img src="../assets/banner4.jpg" alt="img4"></li>
    </nav>-->
    <!--<h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  margin:0;
  padding:0;
}
.hello{
  width: 100%;
  height: 600px;
}

/*nav{
  width: 720px;
  height: 405px;
  margin:20px auto;
  overflow: hidden;
  position: relative;
}
#index{
  position: absolute;
  left:320px;
  bottom: 20px;
  
}
#index li{
  width:8px;
  height: 8px;
  border: solid 1px gray;
  border-radius: 100%;
  background-color: #eee;
  display: inline-block;
}
#img{
  width: 720px;!*不给宽高无法移动*!
  height: 405px;
}
#img li{
  width: 720px;
  height: 405px;
  position: absolute;!*必须设置为absolute，否则第一个li会把后面的都覆盖*!
  z-index: -1;
  opacity: 0;
  transition: opacity 1s ease-in;
}
#index .on{
  background-color: black;
}
#img .opa-on{
  opacity: 1;
}*/
</style>
