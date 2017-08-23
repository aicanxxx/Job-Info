<template>
  <div class="home">
      <aside class="auto-height">
        <ul>
          <li v-for="(item,index) in options" @click="chooseWeb(item,index)" class="aside-list">{{item.web}}</li>
        </ul>
      </aside>
      <article class="auto-height">
        <ul>
          <li v-for="(item,index) in infos" class="article-list">
            <h3><a :href="item.links">{{item.title}}</a></h3>
            <p class="date">
              <span>{{item.date}}</span>
              <span>{{item.from}}</span>
            </p>
            <p>{{item.desc}}</p>
          </li>
        </ul>
      </article>
    <!--<aside class="auto-height">
      <img src="http://placehold.it/200x200.png" alt="200x200"/>
      <p>这是一个 Figure</p>
    </aside>
    <article class="auto-height">
      <img src="http://placehold.it/250x250.png" alt="200x200"/>
      <p>这是一个 Figure</p>
    </article>-->
  </div>
  <!--<div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>-->
</template>



<script>
import Vue from 'vue'
import fecth from '../fetch/fetch'

export default {
  name: 'hello',
    data(){
        return {
            infos:[],
            options:[{
                web:'应届生求职网',
                link:'http://www.yingjiesheng.com/'
            },{
                web:'西电瑞思',
                link:'http://www.yingjiesheng.com/'
            },{
                web:'北大BBS',
                link:'http://www.yingjiesheng.com/'
            }],
            opt:'应届生求职网',
            isLoading:false,
            isShow:true,
        }
    },
    methods:{
        getData(option,num){
            //console.log(option);
            fecth.yjs().then((res)=>{
                /*Object.keys(res).forEach(item=>{
                    res[item].forEach((val,index)=>{
                        if(!this.infos[index]){
                            Vue.set(this.infos,index,{});
                            //this.infos[index]={};这种方法利用索引直接赋值，导致数据不能渲染响应
                        }
                        Vue.set(this.infos[index],item,val);//与上面同理
                        
                        //this.infos[index][item]=val;
                    })
                })*/
                this.infos=res;
            });
            console.log(this.infos);
            this.isLoading=false;
        },
        chooseWeb(option,index){
            //this.curIndex=index;
            //this.opt=option;
            this.getData(option,index);
            this.isLoading=true;
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
