<template>
  <!--<div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>-->
  <div id="app">
    <header>
      <div class="header-main">
        <figure class="left">
          <img src="./assets/logo2.png" alt="logo">
        </figure>
        <p class="name left">Job-Infos</p>
        <nav class="menu">
          <a class="menu-item" href="#"><i class="fa fa-home fa-fw"></i>&nbsp; 首页</a>
          <a class="menu-item" href="#"><i class="fa fa-file-text fa-fw"></i>&nbsp; 面经</a>
          <a class="menu-item" href="#"><i class="fa fa-book fa-fw"></i>&nbsp; 资料</a>
          <a class="menu-item" href="http://www.cnblogs.com/aicanxxx/"><i class="fa fa-pencil fa-fw"></i>&nbsp; 博客</a>
          <a class="menu-item" href="#"><i class="fa fa-github fa-fw"></i>&nbsp; github</a>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
        <p><span><i class="fa fa-copyright fa-fw"></i>2017 Job-Infos</span></p>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'app',
    data(){
      return {
          types:[
            {
                title:'主页',
                link:'home'
            },
            {
                title:'面经',
                link:'view'
            },
            {
                title:'资料',
                link:'learn'
            },
            {
                title:'博客',
                link:'http://www.cnblogs.com/aicanxxx/'
            },
            {
                title:'github',
                link:'http://www.github.com/aicanxxx/'
            }
          ]
      }
    }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .left{
    float: left;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  header{
    width:100%;
    height: 80px;
    background-color: pink ;
  }
  .header-main{
    min-width: 720px;
    padding: 5px 60px;
    *zoom: 1;/*兼容IE6*/
  }
  .header-main:after,main:after{/*伪类清除浮动*/
    display: block;
    clear: both;
    content: '\0020';
    height: 0;
    visibility: hidden;
  }
  .header-main img,.header-main figure{
    width:70px;
    height:70px;
  }
  .name{
    font-size: 45px;
    padding: 9px 10px;
    color: brown;
  }
  .menu{
    float: right;
    margin:25px 0;
  }
  .menu-item{
    color: black;
    padding-left: 20px;
  }
  main{
    width: 100%;
    min-width: 720px;
    background-color: white;
    overflow: hidden;
  }
  main article{
    margin-left : 270px;
  }
  aside{
    width: 240px;
    background-color: lavenderblush;
    box-shadow: 4px 0 5px grey;
  }
  .auto-height{
    padding-bottom: 2000px;
    margin-bottom: -1950px;
  }
  .aside-list{
    padding: 15px 0;
    border-bottom: solid 1px thistle;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  aside li:hover{
    background-color: thistle;
  }
  article{
    padding-top: 20px;
  }
  .article-list{
    text-align: left;
    padding: 10px;
  }
  .article-list h3{
    font-weight: normal;
    padding: 10px 0;
    font-size: 16px;
  }
  .article-list p{
    padding: 5px 0;
    font-size: 14px;
  }
  .date span{
    padding-right:10px ;
    font-size: 10px;
    color: gray;
  }
  footer{
    width:100%;
    min-width: 720px;
    height: 60px;
    background-color: lavenderblush ;
    border-top:solid 1px thistle;
  }
  footer p{
    font-size: 14px;
    color: black;
    padding: 22px 0;
  }
</style>
