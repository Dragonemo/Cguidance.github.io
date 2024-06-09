<template>
    <div>
      <h2>实验5：简单计算器</h2>
      <p>一个最简单的计算器，支持 +,-,*,/ 四种运算。</p>
      
      <h3>输入格式</h3>
      <p>输入只有一行，共有三个参数，其中第 1,2 个参数为整数，第 3 个参数为操作符（+,-,*,/）。</p>
      
      <h3>输出格式</h3>
      <p>输出只有一行，一个整数，为运算结果。</p>
      <p>如果出现除数为 0 的情况，则输出：Divided by zero!。</p>
      <p>如果出现无效的操作符，则输出：Invalid operator!。</p>
      
      <h4>输入输出样例1</h4>
      <div>
        <p>输入样例:</p>
        <pre><code class="code">
  1 2 +
        </code></pre>
        <p>输出样例:</p>
        <pre><code class="code">
  3
        </code></pre>
      </div>
      
      <h4>我的答案：</h4>
      <pre><code class="code">
  #include&lt;stdio.h&gt;
  
  int main(){
      char op;
      int a, b;
      scanf("%d %d %c", &a, &b, &op);
  
      switch(op) {
        case '+':
            printf("%d\n", a + b);
            break;
        case '-':
            printf("%d",a-b);
        case '*':
            printf("%d",a*b);
        case '/':
            if(b==0)
                printf("Divided by zero");
            else
                printf("%d",a/b);
                break;
        default:
            printf("Invalid operator!\n");
            break;
      }
      return 0;
  }
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex5'
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