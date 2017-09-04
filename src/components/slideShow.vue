<template>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img" >
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{slides[nowIndex].title}}</h2>
        <ul class="slides-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item,index) in slides" @click="goto(index)">
                <a :class="{on:index===nowIndex}">{{ index+1 }}</a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            slides:{
                type:Array,
                default:[]
            },
            inv:{
                type:Number,
                default:1000
            }
        },
        data(){
            return {
                nowIndex:0,
                isShow:true
            }
        },
        methods:{
            goto(index){
                this.isShow=false;
                setTimeout(()=>{
                    this.isShow=true;
                    this.nowIndex = index;
                },10)
            },
            runInv(){
                this.invId=setInterval(()=>{
                    this.goto(this.nextIndex)
                },this.inv)
            },
            clearInv(){
                clearInterval(this.invId);
            }
        },
        mounted(){
            this.runInv();
        },
       computed:{
            prevIndex(){
                if(this.nowIndex===0){
                    return this.slides.length-1;
                }
                return this.nowIndex-1;
            },
           nextIndex(){
               if(this.nowIndex===this.slides.length-1){
                   return 0;
               }
               return this.nowIndex+1;
           }
       }
    }
</script>

<style scoped>
    .slide-trans-enter-active{
        transition: all 0.5s;
    }
    .slide-trans-enter{
        transform: translateX(900px);
    }
    .slide-trans-old-leave-active{
        transition: all 0.5s;
        transform: translateX(-900px);
    }
    /*.slide-trans-old-leave{
    
    }*/
    .slide-show{
        width:900px;
        height:506px;
        margin-bottom: 20px;
        position: relative;
        overflow: hidden;
    }
    .slide-img{
        width:900px;
        height:506px;
    }
    .slide-img img{
        position: absolute;
    }
    .slide-show h2{
        width: 100%;
        height:30px;
        line-height: 30px;
        position: absolute;
        left:0;
        bottom:0;
        background-color: #000;
        opacity: 0.5;
        padding-left:25px ;
        font-size: 16px;
        color: #fff;
    }
    .slides-pages{
        height:30px;
        position: absolute;
        right:25px;
        bottom:-6px;
    }
    .slides-pages li{
        display: inline-block;
        padding: 0 5px;
        font-size: 16px;
        color:#fff;
        cursor: pointer;
    }
    .slides-pages li a{
        font-size: 16px;
        display: inline-block;
        color:#fff;
        padding: 2px 3px 0 3px;
    }
    .on{
        border: 1px solid #fff;
    }
</style>