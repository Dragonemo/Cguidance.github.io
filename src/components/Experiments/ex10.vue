<template>
    <div class="experiment-description">
      <h2>实验10：培训</h2>
      <p>某培训机构的学员有如下信息：姓名（字符串），年龄（周岁，整数），去年 NOIP 成绩（整数，且保证是5的倍数）。经过为期一年的培训，所有同学的成绩都有所提高，提升了20%（当然NOIP满分是600分，不能超过这个得分）。</p>
  
      <h3>输入格式</h3>
      <p>第一行输入一个正整数n，表示学员个数。第二行开始往下n行。每行首先是一个字符串表示学员姓名，再是一个整数表示学员年龄，再是一个整数为去年NOIP成绩。</p>
  
      <h3>输出格式</h3>
      <p>输出n行，每行首先输出一个字符串表示学生姓名，再往后两个整数，表示经过一年的培训后学员的年龄和他们今年的NOIP成绩。以空格隔开。</p>
  
      <h3>输入输出样例</h3>
      <div class="sample">
        <h4>输入</h4>
        <pre><code class="code">
  3
  kkksc03 24 0
  chen_zhe 14 400
  nzhtl1477 18 590
        </code></pre>
        <h4>输出</h4>
        <pre><code class="code">
  kkksc03 25 0
  chen_zhe 15 480
  nzhtl1477 19 600
        </code></pre>
      </div>
  
      <h3>题解</h3>
      <p>设计一个结构体储存学员信息，并设计一个函数模拟培训过程，其参数是这样的结构体类型，返回同样的结构体类型，并输出学员信息。</p>
  
      <h3>C语言代码实现</h3>
      <pre><code class="code">
  #include &lt;stdio.h&gt;
  #include &lt;string.h&gt;
  #include &lt;stdlib.h&gt;
  
  struct xy {
      char name[1000];
      int age;
      int grade;
  };
  
  void count(struct xy stu1) {
      stu1.age += 1;
      stu1.grade *= 1.2;
      if (stu1.grade > 600) stu1.grade = 600;
      printf("%s %d %d\n", stu1.name, stu1.age, stu1.grade);
  }
  
  int main() {
      int n;
      struct xy list[6];
      scanf("%d", &n);
      for (int i = 0; i < n; i++) {
          scanf("%s %d %d", list[i].name, &list[i].age, &list[i].grade);
          count(list[i]);
      }
      return 0;
  }
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex10'
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