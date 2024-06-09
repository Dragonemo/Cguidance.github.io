<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img src="https://s.ecust.edu.cn/entry/upload/portal/2023-10-13/202310131536393164.png" alt="" width="230px" align="left">
        <h1>华东理工大学C语言实验指导</h1>

      </el-header>

        <el-main>
          <el-carousel :interval="3000" type="card" height="500px">
            <el-carousel-item v-for="item in images" :key="item.id">
              <img :src="item.idview" style=" height: 100%">
            </el-carousel-item>
          </el-carousel>
        </el-main>

    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  data() {
    return {
      images:[
        {id:1,idview:require('@/assets/homeview/1.jpg')},
        {id:2,idview:require('@/assets/homeview/2.jpg')},
        {id:4,idview:require('@/assets/homeview/4.jpg')},
        {id:5,idview:require('@/assets/homeview/5.jpg')},
        {id:6,idview:require('@/assets/homeview/6.jpg')},
      ]
      
    }
  }
}
</script>

<style scoped>
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

.el-aside {
  background-color: #d3dce6;
  color: #ecf5ff;
  text-align: center;
  height: 200px
}
.el-main{
  background-image: url('https://s.ecust.edu.cn/entry/upload/portal/2023-10-29/20231029112856655E.jpeg');
  
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll; /* 背景图片随元素滚动 */
  background-position: center center;
  min-height: 100vh; /* 至少为视口高度，确保背景图片可见 */
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
