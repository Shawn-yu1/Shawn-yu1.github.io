<template>
    <header>
        <nav>
            <router-link exact to="/">首页</router-link>
            <router-link exact to="/detail">详情</router-link>
            <router-link exact to="/list">列表</router-link>
        </nav>
        <div class="xinxi">
                <i>欢迎用户：{{user}}</i>
                <b v-if="flag" @click="outSubmit">退出登录</b>
               <router-link to='/login' class="sub" v-else><em>请登录</em></router-link> 
        </div>
    </header>
</template>
<script>
export default {
    name:'Head',
    data(){
        return{
            user:'',
            flag:false
        }
    },
    created(){
        this.user=sessionStorage.getItem('user')
        if(this.user==='freeless'){
            this.flag=true;
        }
    },
    methods:{
        outSubmit(){
            sessionStorage.removeItem('user')
            this.user=''
            this.flag=false
        }
    }
    
}
</script>
<style scoped>
header{
    height:50px;
    background:#181818;
    overflow: hidden;
}
nav{
    width:300px;
    float: left;
    margin-left:50px;
    margin-top:10px;
}
header a{
    color:#880000;
    font-size: 25px;
    padding: 5px 10px;
    text-decoration: none;
    font-weight:bolder;
    font-style: italic;
}
.router-link-active{
    border-bottom:3px solid #99FFCC;
    color:#99FFCC;
}
.xinxi{
    width:400px;
    height:100%;
    line-height: 50px;
    float: right;
}
i{
    color:#fff;
    font-size: 20px;
}
b{
    color:#880000;
    font-size: 20px;
    margin-left:20px;
}
.sub{
    font-size: 20px;
}
</style>


