<template>
    <div>
        <Head></Head>
        <div class="block">
            <el-carousel height="400px">
            <el-carousel-item v-for="item of url" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="single">     
            <h3>{{msg.title}}</h3>
            <p>{{msg.body}}</p>
        </div>
    </div>
</template>
<script>
import Head from './Head'
export default {
    name:'Single',
    components:{Head},
    data(){
        return{
            id:this.$route.params.id,
            msg:{},
            url:[
                {imgUrl:"./../../static/timg.jpg",id:'1'},
                {imgUrl:"./../../static/timg (2).jpg",id:'2'},
                {imgUrl:"./../../static/timg (4).jpg",id:'3'}
            ]
        }
    },
    created(){
        this.axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then((res)=>{
            this.msg=res.data
        })
    }
}
</script>
<style scoped>
.single{
    width:100%;
    height:80px;
    border:2px solid black;
    text-align: center;
}
h3{
    margin:10px 0;
}
img{
    width:600px;
    height:400px;
}
.block{
    width:600px;
    margin:20px auto;
}
</style>