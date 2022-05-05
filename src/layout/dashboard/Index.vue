<template>
  <el-main :style="{ height: mianHeight + 'px' }">
    <div style="display: flex;">
      <el-card style="flex: 1;">
        <template #header>
          <div class="card-header">
            <span style="font-weight: 600;">今日访客</span>
          </div>
        </template>
        <!-- 图表一 -->
        <!-- <div ref="myChart" :style="{ width: '400px', height: '300px' }"></div> -->
        <CommonEcharts :optios="option1" :height="heights"></CommonEcharts>
      </el-card>
      <el-card style="margin-left: 20px;flex: 1;">
        <template #header>
          <div class="card-header">
            <span style="font-weight: 600;">订单统计</span>
          </div>
        </template>
        <!-- <div ref="myChart1" :style="{ width: '400px', height: '300px' }"></div> -->
        <CommonEcharts :optios="option3" :height="heights"></CommonEcharts>
      </el-card>
      <el-card style="margin-left: 20px;flex: 1;">
        <template #header>
          <div class="card-header">
            <span style="font-weight: 600;color: #FF7670;">待发送</span>
          </div>
        </template>
        <!-- <div ref="myChart2" :style="{ width: '400px', height: '300px' }"></div> -->
        <CommonEcharts :optios="option2" :height="heights"></CommonEcharts>
      </el-card>
    </div>
    <el-card style="flex: 1;margin-top: 20px;">
      <template #header>
        <div class="card-header">
          <span style="font-weight: 600;color: blue;">课程介绍</span>
        </div>
      </template>
      <div style="display: flex;justify-content: space-between;cursor: pointer;">
        <div style="flex: 1;">
          <div>
            <a
              style="color: black;text-decoration:underline;cursor: pointer;"
              @click="open('https://itmk.ke.qq.com/?tuin=d0b88697#tab=1&category=-1')"
            >1、Vue3 + Ts + Element Plus项目实战学习地址</a>
          </div>
          <div style="margin-top: 20px;">
            <a
              style="color: black;text-decoration:underline;cursor: pointer;"
              @click="open('https://itmk.ke.qq.com/?tuin=d0b88697#tab=1&category=-1')"
            >2、vue-element-admin、jwt、Spring Security、Spring Boot项目实战</a>
          </div>
          <div style="margin-top: 20px;text-decoration:underline;cursor: pointer;">
            <a
              style="color: black;"
              @click="open('https://itmk.ke.qq.com/?tuin=d0b88697#tab=1&category=-1')"
            >3、vue、element-ui、springboot前后端分离权限管理系统实战</a>
          </div>
          <div style="margin-top: 20px;text-decoration:underline;cursor: pointer;">
            <a
              style="color: black;"
              @click="open('https://itmk.ke.qq.com/?tuin=d0b88697#tab=1&category=-1')"
            >4、vue-admin-template + springboot+vue前后端分离项目实战-物业管理系统</a>
          </div>
        </div>
        <CommonEcharts style="flex: 1;" :height="height1" :optios="option3"></CommonEcharts>
      </div>
    </el-card>
  </el-main>
</template>
<script setup lang='ts'>
import CommonEcharts from '@/components/echarts/CommonEcharts.vue';
import { ref, nextTick, onMounted, reactive } from 'vue'

//打开窗口
const open = (url: string) => {
  window.open(url)
}

const mianHeight = ref(0)

//定义echarts的高度
const heights = ref('280px')
const height1 = ref('290px')
const widths = ref('390px')
//柱状图
let option1 = reactive({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
});
//饼图
let option2 = reactive({
  title: {
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
//环图
let option3 = reactive({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
});
onMounted(() => {
  nextTick(() => {
    mianHeight.value = window.innerHeight - 100
  })
})
</script>
<style scoped lang='scss'>
</style>