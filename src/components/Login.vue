<template>
    <div class="login">
        <div class="login_box">
            <h1>欢迎你，请登录</h1>
            <el-input class="txt" v-model="user" placeholder="请输入用户" name="user"></el-input>
            <el-input class="psw" v-model="passward" placeholder="请输入密码" name="passward"></el-input>
            <el-button type="primary" @click="submitFn">提交</el-button>
            <el-button type="warning" @click="resetFn">重置</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            passward:'',
            user:''
        }
    },
    created(){
        this.user=localStorage.getItem('user')
    },
    methods:{
        submitFn(){
            this.axios.post('/api',{
                user:this.user,
                passward:this.passward
            }).then((res)=>{
                if(res.data===1){
                    this.$router.push('/');
                    localStorage.setItem('user',this.user);
                    sessionStorage.setItem('user',this.user);
                }
            })
        },
        resetFn(){
            this.user='';
            this.passward='';
        }
    }
}
</script>
<style scoped>
h1{
    font-size:30px;
}
.login_box{
    width:300px;
    height:200px;
    padding:60px 50px;
    border:1px solid #ccc;
    margin: 0 auto;
    text-align: center;
}
.txt{
    margin-top:30px;
}
.psw{
    margin-top:30px;
}
button{
    margin-top:20px;
}
</style>