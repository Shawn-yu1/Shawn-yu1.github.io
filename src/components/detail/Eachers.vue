<template>
    <div class="eachers">
        <div class="abox">
            <div id="main" style="width:400px;height:400px"></div>
        </div>
        <div class="ebox">
            <h1>2019年，我在这里</h1>
            <div id="container"></div> 
        </div>
           
    </div>
</template>
<script>
export default {
    name:'Eachers',
    mounted(){
        this.baidumap();
        this.drawline();
    },
    methods:{
        baidumap(){
                    var map = new BMap.Map("container");
                    var point = new BMap.Point(116.404, 39.915);
                    // 创建点坐标  
                    map.centerAndZoom(point, 15);
                    // 初始化地图，设置中心点坐标和地图级别 
                    map.enableScrollWheelZoom(true);
                    map.addControl(new BMap.ScaleControl());
                    map.addControl(new BMap.OverviewMapControl());
                    map.addControl(new BMap.MapTypeControl());
                    map.setCurrentCity("北京");
                    var opts = {
                        type: BMAP_NAVIGATION_CONTROL_LARGE,
                        offset: BMAP_ANCHOR_BOTTOM_RIGHT
                    }
                    map.addControl(new BMap.NavigationControl(opts));
                    map.setMapStyleV2({
                        styleId: '403f1a8e61d2f4588ef38b30afb5363e'
                    });

                    var local = new BMap.LocalSearch(map, {
                        renderOptions: {
                            map: map
                        }
                    });
                    local.search("成都");
                },
                drawline(){
                    let myChart = this.$echarts.init(document.getElementById('main'));
                    var data = [
                            [5000, 10000, 6785.71],
                            [4000, 10000, 6825],
                            [3000, 6500, 4463.33],
                            [2500, 5600, 3793.83],
                            [2000, 4000, 3060],
                            [2000, 4000, 3222.33],
                            [2500, 4000, 3133.33],
                            [1800, 4000, 3100],
                            [2000, 3500, 2750],
                            [2000, 3000, 2500],
                            [1800, 3000, 2433.33],
                            [2000, 2700, 2375],
                            [1500, 2800, 2150],
                            [1500, 2300, 2100],
                            [1600, 3500, 2057.14],
                            [1500, 2600, 2037.5],
                            [1500, 2417.54, 1905.85],
                            [1500, 2000, 1775],
                            [1500, 1800, 1650]
                        ];
                        var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
                        var barHeight = 50;

                        var option = {
                            title: {
                                text: '在中国租个房子有多贵？',
                            },
                            legend: {
                                show: true,
                                data: ['价格范围', '均值']
                            },
                            grid: {
                                top: 100
                            },
                            angleAxis: {
                                type: 'category',
                                data: cities
                            },
                            tooltip: {
                                show: true,
                                formatter: function (params) {
                                    var id = params.dataIndex;
                                    return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
                                }
                            },
                            radiusAxis: {
                            },
                            polar: {
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                data: data.map(function (d) {
                                    return d[0];
                                }),
                                coordinateSystem: 'polar',
                                stack: '最大最小值',
                                silent: true
                            }, {
                                type: 'bar',
                                data: data.map(function (d) {
                                    return d[1] - d[0];
                                }),
                                coordinateSystem: 'polar',
                                name: '价格范围',
                                stack: '最大最小值'
                            }, {
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                data: data.map(function (d) {
                                    return d[2] - barHeight;
                                }),
                                coordinateSystem: 'polar',
                                stack: '均值',
                                silent: true,
                                z: 10
                            }, {
                                type: 'bar',
                                data: data.map(function (d) {
                                    return barHeight * 2
                                }),
                                coordinateSystem: 'polar',
                                name: '均值',
                                stack: '均值',
                                barGap: '-100%',
                                z: 10
                            }],
                            legend: {
                                show: true,
                                data: ['A', 'B', 'C']
                            }
                        };
                          myChart.setOption(option);
                }
    }
       
}
</script>
<style scoped>
.eachers{
    float: left;
    width:80%;
    text-align: center;
    margin-top:20px;
}
.ebox{
    float:right;
    margin-right:100px;
}
h1{
    margin-bottom: 20px;
}
#container{
    width:500px;
    height:500px;
}
.abox{
    float: left;
    margin-left:50px;
    margin-top:100px;
}
</style>