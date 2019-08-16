<template>
    <div class="list">
        <Head></Head>
        <div class="lbox">
             <el-table   :data="this.resultPage"  style="width:1000;">
                 <el-table-column
                    prop="title"
                    label="title"
                    width="400">
                </el-table-column>
                <el-table-column
                    prop="body"
                    label="内容"
                    width="400">
                </el-table-column> 
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index,scope.row)"
                    >删除</el-button>
                    </template>
                </el-table-column>
             </el-table>
            <el-pagination
                    class="fenye"
                    @current-change="handleCurrentChange"
                    background
                    :page-size="pageSize"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div> 
    </div>
</template>
<script>
import Head from './Head'
export default {
    name:'List',
    components:{Head},
    data(){
       return{
           msg:[],
           total:0,
           pageSize:5,
           yema:1
       }
    },
    methods:{
        handleCurrentChange(val){
            this.yema=val
        },
        handleDelete(index,row){
            this.msg.splice(index,1)
        }  
    },
    computed:{
        resultPage(){
            return this.msg.slice((this.yema-1)*this.pageSize,this.yema*this.pageSize)
        }
    },
    created(){
        // this.axios.get('./../../static/txt.json').then((res)=>{
        //     console.log(res.data)
        //     this.msg=res.data
        //     this.total=this.msg.length
        // })
        this.msg=JSON.parse(localStorage.getItem('list'));
        this.total=JSON.parse(localStorage.getItem('list')).length;
    }
}
</script>
<style scoped>
.list{
    width:100%;
}
.lbox{
    width:1000px;
    margin:0 auto;
    text-align: center;
}
.fenye{
    margin-top:20px;
}

</style>


