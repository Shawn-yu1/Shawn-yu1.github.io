<template>
    <div class="detail">
        <Head></Head>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>
<script>
import Nav from './detail/Nav'
import Head from './Head'
export default {
    name:'Detail',
    components:{Head,Nav}
}
</script>
<style scoped>
.detail{
    overflow: hidden;
}
</style>