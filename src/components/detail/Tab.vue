<template>
    <!-- <div class="tab">
        <ul>
            <li v-for="item of model" @click="num=item" :class="{active:item===num}">{{item}} </li>
        </ul>
        <div class="tabbox" v-for="item of model" v-show="item===num">{{item}}</div>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name:'Tab',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
.tab{
    float: left;
    width:80%;
}

</style>