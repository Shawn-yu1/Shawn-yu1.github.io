<template>
    <div class="user">
        <div class="box">
                <img class="touxiang" :src="url" alt="">
               <ul>
                   <li>姓名：{{name}}</li>
                   <li>年龄：18</li>
                   <li>职业：流浪</li>
                   <li>学历：人类最高阶</li>
               </ul>
        </div>
        <el-calendar class="rili" v-model="value">
        </el-calendar>
    </div>
</template>
<script>
export default {
    name:'User',
    data(){
        return{
            url:'./../../../static/timg.jpg',
            name:'132',
            value:new Date()
        }
    }
}
</script>
<style scoped>
.user{
    float: left;
    width:80%;
    overflow: hidden;
    margin-top:20px;
}
.box{
    width:200px;
    height:500px;
    background:black;
    text-align: center;
    float: left;
    transition:all 2s;
    animation:mymove 5s;
}
@keyframes mymove {
    from{background:#ccc}
    to{background:black}
}
li{
    height:50px;
    color:#fff;
    font-size: 20px;
    margin:10px 0;
    line-height: 50px;
    border-bottom:1px solid #ccc;
}
.touxiang{
    width:50px;
    height:50px;
    border-radius: 50%;
}
.rili{
    float: right;
    width:800px;
    height:650px;
    border:1px solid #ccc;
    margin-right:50px;
    background:#696969;
}
.touxiang{
    margin-top:30px;
}
</style>


