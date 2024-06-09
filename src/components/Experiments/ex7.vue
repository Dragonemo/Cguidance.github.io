<template>
    <div class="experiment-description">
      <h2>实验7：水仙花数</h2>
      <p>春天是鲜花的季节，水仙花就是其中最迷人的代表，数学上有个水仙花数，它是指一个三位数，它的各位数字的立方和等于其本身，例如：153 = 1^3 + 5^3 + 3^3。</p>
      
      <h3>输入格式</h3>
      <p>输入数据有多组，每组占一行，包括两个整数 m 和 n（100 <= m <= n <= 999）。</p>
      
      <h3>输出格式</h3>
      <p>对于每个测试实例，要求输出所有在给定范围内的水仙花数。如果有多个，则要求从小到大排列在一行内输出，之间用一个空格隔开；如果给定的范围内不存在水仙花数，则输出 'no'；每个测试实例的输出占一行。</p>
      
      <h3>输入样例</h3>
      <pre><code class="code">
  100 120
  300 380
      </code></pre>
      
      <h3>输出样例</h3>
      <pre><code class="code">
  no
  370 371
      </code></pre>
      
      <h3>我的题解</h3>
      <p>题解思路：这个题目可以通过遍历给定范围内的所有三位数，检查每个数是否是水仙花数，即它的各位数字立方和是否等于其本身。</p>
      
      <h3>C 语言代码实现</h3>
      <pre><code class="code">
  #include &ltstdio.h&gt
  #include &ltmath.h&gt
  int main() {
      int m, n;
      int x = 0;
      while(scanf("%d %d", &m, &n) != EOF){
          for(m; m <= n; m++){
              if(m == pow((m / 100), 3) + pow((m % 100 / 10), 3) + pow((m % 10), 3)){
                  x++;
                  if(x == 1){
                      printf("%d", m);
                  }
                  else{
                      printf(" %d", m);
                  }
              }
          }
          if(x == 0){
              printf("no");
          }
          printf("\n");
          x = 0;
      }
      return -1;
  }
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex7'
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