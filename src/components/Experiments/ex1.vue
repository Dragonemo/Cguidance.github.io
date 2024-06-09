<template>
    <div id="1-1"><h2>实验1：输出"Hello, World!"</h2>
        <p>
          对于大部分编程语言来说，编写一个能够输出 "Hello, World!" 的程序往往是最基本、最简单的。因此，这个程序常常作为一个初学者接触一门新的编程语言所写的第一个程序，也经常用来测试开发、编译环境是否能够正常工作。
        </p>
        <h3>输入格式</h3>
        <p>无</p>
        <h3>输出格式</h3>
        <p>一行，仅包含一个字符串：</p>
        <pre><code class="code">
Hello, World!
        </code></pre>
        <h3>我的答案：</h3>
        <pre><code class="code">
#include &lt;stdio.h&gt;
int main() {
printf("Hello, World!");
return 0;
}
</code></pre>
</div>
</template>


<script>
export default {
  name: 'ex1',
}

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