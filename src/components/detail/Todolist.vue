<template>
    <div class="todo">
        <h1>快选择你的最爱吧</h1>
        <el-transfer class="todobox"
            v-model="value"
            :titles="titles"
            :props="{
            key: 'value',
            label: 'desc'
            }"
            :data="data">
        </el-transfer>
    </div>
</template>
<script>
export default {
    name:'Todolist',
    data(){
        const generateData = ()=> {
        const data = [];
        const caidan=["鱼香肉丝","宫保鸡丁","番茄炒蛋","佛跳墙","锅包肉","红烧排骨","水煮肉片","烤肉","串串","麻辣烫"];
        for (let i = 0; i <= 9; i++) {
          data.push({
            value: i,
            desc: `菜名：${ caidan[i] }`,
          });
        }
        return data;
      };
        return{
                data: generateData(),
                value: [],
                titles:["中华美食","我全都要"]  
        }
    },
    updated(){
       localStorage.setItem('value',this.value.join(''));
    },
    created(){
        this.value=localStorage.getItem('value').split('').map(Number);
    }
    
}
</script>
<style scoped>
.todo{
    float: left;
    width:80%;
    height:680px;
    background:url("./../../../static/food.jpg") no-repeat;
    background-size: 100% 100%;
    margin-top:20px;
}
.todobox{
    margin-top:50px;
    margin-left:200px;
}
h1{
    color:orangered;
    width:100%;
    text-align: center;
    font-size: 20px;
    margin-top:20px;
}



</style>


