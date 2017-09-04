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
            fecth.yjs().then((res)=>{
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

</style>
