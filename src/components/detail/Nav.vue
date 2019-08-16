<template>
    <div class="nav">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#181818"
                text-color="#fff"
                active-text-color="#ffd04b">
                <router-link exact to='/detail'>
                     <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                    </el-menu-item>
                </router-link>
                <router-link exact to='/detail/todolist'>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                </router-link>
                <router-link exact to='/detail/tab'>
                    <el-menu-item index="3" >
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                 </router-link>
                <router-link exact to='/detail/eachers'>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </router-link>
                </el-menu>
    </div>
</template>
<script>
export default {
    name:'Nav'
}
</script>
<style scoped>
.nav{
    width:20%;
    height:100%;
    float: left;
    margin-top:5px;
}
ul{
    width:100%;
    height:700px;
}
</style>

