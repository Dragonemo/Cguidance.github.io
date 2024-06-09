<template>
    <div class="experiment-description">
      <h2>实验6：车厢重组</h2>
      <p>在一个旧式的火车站旁边有一座桥...</p>
      <!-- 题目描述 -->
      <h3>输入格式</h3>
      <p>共两行。第一行是车厢总数 (≤10000)N(≤10000)。第二行是 N 个不同的数表示初始的车厢顺序。</p>
      <h3>输出格式</h3>
      <p>一个整数，最少的旋转次数。</p>
      <!-- 输入输出样例 -->
      <h3>输入输出样例</h3>
      <div>
        <p>输入样例:</p>
        <pre><code class="code">
  4
  4 3 2 1
        </code></pre>
        <p>输出样例:</p>
        <pre><code class="code">
  7
        </code></pre>
      </div>
      <!-- 我的答案 -->
      <h3>我的答案：</h3>
      <pre><code class="code">
  // C语言代码
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex6'
  };
  </script>
  
  <style scoped>
  h2 {
    color: #303133;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
}
h3 {
    color: #303133;
    border-bottom: 2px none #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
}
h4 {
    color: #303133;
    border-bottom: 2px none #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
}

p {
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
  /* 样式可以根据需要进行调整 */
  </style>