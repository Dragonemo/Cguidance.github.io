<template>
    <div class="experiment">
    <div class="common-layout">
        <el-container>
          <el-header>
            <img src="https://s.ecust.edu.cn/entry/upload/portal/2023-10-13/202310131536393164.png" alt="" width="230px" align="left">
            
            <h1>实验指导</h1>
        </el-header>
          <el-container>
            <el-aside width="15%" >
                
                <div class="affix-container">

                <el-affix target=".affix-container" :offset="120">
                    <el-row class="tac">
                        <el-col :span="24">
                          
                          <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                          >
                            <el-sub-menu index="1">
                              <template #title>
                                <!-- <el-icon><location /></el-icon> -->
                                <span>实验指导</span>
                              </template>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex1')" >实验1</a></el-menu-item>

                              <el-sub-menu index="1-2">
                                <template #title><a href="javascript:void(0);" @click="goAnchor('#ex2')" >实验2</a></template>
                                <el-menu-item>方法1</el-menu-item>
                                <el-menu-item>方法2</el-menu-item>
                                
                              </el-sub-menu>

                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex3')" >实验3</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex4')" >实验4</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex5')" >实验5</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex6')" >实验6</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex7')" >实验7</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex8')" >实验8</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex9')" >实验9</a></el-menu-item>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex10')" >实验10</a></el-menu-item>
                              
                              <el-sub-menu index="1-11">
                                <template #title><a href="javascript:void(0);" @click="goAnchor('#ex11')" >实验11</a></template>
                                <el-menu-item>不用指针</el-menu-item>
                                <el-menu-item>用指针</el-menu-item>
                                
                              </el-sub-menu>
                              <el-menu-item><a href="javascript:void(0);" @click="goAnchor('#ex12')" >实验12</a></el-menu-item>

    
                            </el-sub-menu>
                    


                          </el-menu>
                        </el-col>
                      </el-row>
                  </el-affix>
                  <el-backtop :right="1250" :bottom="100" />
                </div>
                
                

            </el-aside>
            <el-main>
                <ex1 id="ex1"></ex1>
                <br>
                <br>
                <ex2 id="ex2"></ex2>
                <br>
                <br>
                <ex3 id="ex3"></ex3>
                <br>
                <br>
                <ex4 id="ex4"></ex4>
                <br>
                <br>
                <ex5 id="ex5"></ex5>
                <br>
                <br>
                <ex6 id="ex6"></ex6>
                <br>
                <br>
                <ex7 id="ex7"></ex7>
                <br>
                <br>
                <ex8 id="ex8"></ex8>
                <br>
                <br>
                <ex9 id="ex9"></ex9>
                <br>
                <br>
                <ex10 id="ex10"></ex10>
                <br>
                <br>
                <ex11 id="ex11"></ex11>
                <br>
                <br>
                <ex12 id="ex12"></ex12>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </div>
    
</template>



<script>

import ex1 from '../components/Experiments/ex1.vue';
import ex2 from '../components/Experiments/ex2.vue';
import ex3 from '../components/Experiments/ex3.vue';
import ex4 from '../components/Experiments/ex4.vue';
import ex5 from '../components/Experiments/ex5.vue';
import ex6 from '../components/Experiments/ex6.vue';
import ex7 from '../components/Experiments/ex7.vue';
import ex8 from '../components/Experiments/ex8.vue';
import ex9 from '../components/Experiments/ex9.vue';
import ex10 from '../components/Experiments/ex10.vue';
import ex11 from '../components/Experiments/ex11.vue';
import ex12 from '../components/Experiments/ex12.vue';
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';

export default {
    components:{
        ex1,
        ex2,
        ex3,
        ex4,
        ex5,
        ex6,
        ex7,
        ex8,
        ex9,
        ex10,
        ex11,
        ex12,
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goAnchor(selector){
        this.$el.querySelector(selector).scrollIntoView({
            behavior: "smooth"
        })
    },
  }
};

</script>

<style scoped>

.el-menu-item{
    height: 30px;
}
a{
    text-decoration: none;
    color: #303133;
}

.el-header {
    background-image:url('https://s.ecust.edu.cn/entry/upload/portal/2023-10-29/20231029112302645l.png') ;
    background-size:contain ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ecf5ff;
    text-align: center;
    font-size: 20px;
    margin: 0 0 0 0 ;
  }

.el-main{
    background-image: url('https://s.ecust.edu.cn/entry/upload/portal/2023-10-29/20231029112856655E.jpeg');
    text-align: left;
}
.experiment h2 {
  color: #303133;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: left;
}
.experiment h3 {
    color: #303133;
    border-bottom: 2px none #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
  }

.experiment p {
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
}
pre {
	background-color: #f4f4f4;
	border: 1px solid #ccc;
	padding: 10px;
	margin: 10px 0;
    text-align: left;
}
.code {
	font-family: Consolas, monospace;
	color: #0077CC;
    text-align: left;
}
.affix-container {
    text-align: center;
    height: 100%;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
  }

</style>