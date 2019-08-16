<template>
  <div class="home">
      <Head></Head>
      <h1>总览条目</h1>
      <div class="box">
        <div class="message_item" v-for="item of message" :key='item.id'>
            <router-link :to="`/single/${item.id}`">
              <h3 v-changeStyle="{font:'20px'}">{{item.id}}.{{item.title|to-uppercase}}</h3>
            </router-link>
            <article>{{item.body}}</article>
        </div>
      </div>
      
     <el-button :plain="true" @click="getMore">加载信息</el-button>
  </div>
</template>

<script>
import Head from './Head'
export default {
  name: 'Home',
  components:{Head},
  data(){
    return{
      message:[],
      n:-5
    }
  },
  created(){
    this.axios.get('./../../static/txt.json').then((res)=>{
        // this.message=res.data.slice(0,10);
        this.$store.commit('handleState',res.data);
        this.message=this.$store.state.storeList.slice(0,10);
    })
  },
  methods:{
    getMore(){
      if(this.n<5){
         this.axios.get('./../../static/txt.json').then((res)=>{
        let date = res.data.slice(10+this.n,15+this.n);
        this.message=this.message.concat(date)
        })  
        this.n+=5;
      }else{
        this.$message({
          showClose: true,
          message: '无加载信息'
        });
      }   
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  text-align: center;
}
h1{
  height:80px;
  color:black;
  font-size:36px;
  text-align: center;
  line-height: 80px;
  margin-bottom: 20px;
  font-style: italic;
  border-bottom: 5px solid black;
}
.message_item{
  height:100px;
  background:black;
  margin-bottom:10px;
  text-align: center;
  box-shadow: 5px 5px 5px black;
}
.message_item a{
  text-decoration: none;
}
.message_item h3{
    padding-top:10px;
    margin-bottom: 10px;
    font-size: 20px;
}
.message_item article{
    font-size: 16px;
    line-height: 20px;
    color:#fff;
}
.box{
  width:800px;
  margin:0 auto;
}
button{
  width:200px;
  height:50px;
  font-size: 20xp;

}
</style>
