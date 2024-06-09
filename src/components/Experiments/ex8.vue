<template>
    <div class="experiment-description">
      <h2>实验8：素数判定</h2>
      <p>对于表达式 n^2 + n + 41，当 n 在 (x, y) 范围内取整数值时（包括 x, y）(-39 <= x < y <= 50)，判定该表达式的值是否都为素数。</p>
  
      <h3>输入格式</h3>
      <p>输入数据有多组，每组占一行，由两个整数 x，y 组成，当 x = 0, y = 0 时，表示输入结束，该行不做处理。</p>
  
      <h3>输出格式</h3>
      <p>对于每个给定范围内的取值，如果表达式的值都为素数，则输出 "OK"，否则请输出 “Sorry”，每组输出占一行。</p>
  
      <h3>Sample Input</h3>
      <pre><code class="code">
  0 1
  0 0
      </code></pre>
  
      <h3>Sample Output</h3>
      <pre><code class="code">
  OK
      </code></pre>
  
      <h3>问题分析：</h3>
      <p>判定一个数是否为素数有各种各样的方法。这里采用比较简单的试除法来实现，并且将判断一个数是否为素数的功能封装到一个函数中。</p>
  
      <h3>C语言代码实现</h3>
      <pre><code class="code">
  #include &lt;stdio.h&gt;
  #include &lt;math.h&gt;
  #define fun(n) ((n) * (n) + (n) + 41)
  /* 试除法判断一个整数是否为素数 */
  int isnotprime(int n)
  {
      if (n % 2 == 0) return 1;
      int end = sqrt(n), i;
      for (i = 3; i <= end; i += 2)
          if (n % i == 0) break;
      return i > end ? 0 : 1;
  }
  int main(void)
  {
      int x, y, i;
      while (scanf("%d %d", &x, &y) != EOF) {
          if (x == 0 &amp;&amp; y == 0) break;
          for (i = x; i <= y; i++)
              if (isnotprime(fun(i))) break;
          printf(i > y ? "OK\n" : "Sorry\n");
      }
      return 0;
  }
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex8'
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