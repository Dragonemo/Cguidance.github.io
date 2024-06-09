<template>
    <div id="1-3">
      <h2>实验3：乘法竖式运算程序</h2>
      <p>编制一个乘法运算的程序，从键盘读入2个100以内的正整数，进行乘法运算并以竖式输出。</p>
      
      <h3>输入格式</h3>
      <p>一行用空格隔开的两个100以内的正整数。</p>
      
      <h4>输入样例1：</h4>
      <pre><code class="code">
  5 2
      </code></pre>
      
      <h4>输出样例1：</h4>
      <pre><code class="code">
     5
  *  2
  ----
    10
      </code></pre>
      
      <h4>输入样例2：</h4>
      <pre><code class="code">
  89 45
      </code></pre>
      
      <h4>输出样例2：</h4>
      <pre><code class="code">
    89
  * 45
   445
  356
  4005
      </code></pre>
      
      <h3>我的答案：</h3>
      <pre><code class="code">
  #include&lt;stdio.h&gt;
  int main()
  {
      int a, b;
      scanf("%d%d", &a, &b);
      printf("%4d\n", a);
      printf("*%3d\n", b);
      printf("----\n");
      // 这里代码需要修正以正确处理乘法运算
      if (b < 10) {
          printf("%4d\n", a * b);
      } else {
          // 以下代码仅处理了乘法运算的特殊情况，需要修正以支持所有情况
          printf("%4d\n", a * (b % 10));
          // 这里缺少了对b/10的乘法运算和累加
          printf("----\n");
          printf("%4d\n", a * b);
      }
      
      return 0;
  }
      </code></pre>
      <p>注意：提供的C语言代码需要修正以正确处理所有情况的乘法运算。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex3'
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
  </style>