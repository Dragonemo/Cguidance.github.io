<template>
    <div class="experiment-description">
      <h2>实验9：查找最大元素</h2>
      <p>对于输入的每个字符串，查找其中的最大字母，在该字母后面插入字符串“(max)”。</p>
  
      <h3>输入格式</h3>
      <p>输入数据包括多个测试实例，每个实例由一行长度不超过100的字符串组成，字符串仅由大小写字母构成。</p>
  
      <h3>输出格式</h3>
      <p>对于每个测试实例输出一行字符串，输出的结果是插入字符串“(max)”后的结果。如果存在多个最大的字母，就在每一个最大字母后面都插入"(max)"。</p>
  
      <h3>Sample Input</h3>
      <pre><code class="code">
  abcdefgfedcba
  xxxxx
      </code></pre>
  
      <h3>Sample Output</h3>
      <pre><code class="code">
  abcdefg(max)fedcba
  x(max)x(max)x(max)x(max)x(max)
      </code></pre>
  
      <h3>问题分析：</h3>
      <p>这个问题的关键是开始不知道字符串中的哪个字符最大，所以需要先看一遍字符串。知道最大字符之后，对字符串再过一遍即可，该插入字符串“(max)”的地方，插入即可。</p>
  
      <h3>C语言代码实现</h3>
      <pre><code class="code">
  #include &lt;stdio.h&gt;
  #define N 100
  char s[N + 1];
  int main(void)
  {
      char maxc;
      int i;
      while (scanf("%s", s) != EOF) {
          maxc = '\0';
          for (i = 0; s[i]; i++)
              if (s[i] > maxc) maxc = s[i];
          for (i = 0; s[i]; i++) {
              printf("%c", s[i]);
              if (s[i] == maxc) printf("(max)");
          }
          printf("\n");
      }
      return 0;
  }
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex9'
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