<template>
    <div class="experiment-description">
      <h2>实验4：两位正整数的简单算术运算</h2>
      <p>算术运算为：+（加法），-（减法），*（乘法），/（整除），%（取余）。</p>
      
      <h3>输入格式</h3>
      <p>一行算术表达式。</p>
      
      <h3>输出格式</h3>
      <p>整型算数运算的结果（结果值不一定为22位数，可能多于22位或少于22位）。</p>
      
      <h4>输入样例</h4>
      <pre><code class="code">
  32+64
      </code></pre>
      
      <h4>输出样例</h4>
      <pre><code class="code">
  96
      </code></pre>
      
      <h3>我的答案：</h3>
      <pre><code class="code">
#include&ltstdio.h&gt
int main(){
    int x,y;
    char c;
    scanf("%d %c %d",&x,&c,&y);
    if(c =='+')
    printf("%d",x+y);
    if(c =='-')
    printf("%d",x-y);
    if(c =='*')
    printf("%d",x*y);
    if(c =='/')
    printf("%d",x/y);
    if(c =='%')
    printf("%d",x%y);

    return 0;
}
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex4'
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