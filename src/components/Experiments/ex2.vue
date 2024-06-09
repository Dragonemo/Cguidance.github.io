<template>
    <div id="1-2">
        <h2>实验2：十进制到八进制</h2>
        <p>把一个十进制正整数转化成八进制。</p>
        <h3>输入格式</h3>
        <p>一行，仅含一个十进制表示的整数a（0&lt;a&lt;65536）。</p>
        <h3>输出格式</h3>
        <p>一行，a的八进制表示。</p>
        <h3>方法1：直接按八进制输出</h3>
        <pre><code class="code">
    #include &lt;stdio.h&gt;
    int main( ){
       int a;
       scanf("%d", &a);
       printf("%o", a);  // 注意：这里使用 %o 作为八进制的格式化输出
       return 0;
    }
        </code></pre>
        <h3>方法2：短除法加倒取余数实现</h3>
        <p>我们可以使用短除法加倒取余数实现。</p>
        <pre><code class="code">
    #include &lt;stdio.h&gt;
    
    void decToOct(int n) {
        // 存储八进制数的数组
        int octalNum[100];
        int i = 0;  // 数组索引
        // 通过短除法计算八进制数
        while (n > 0) {
            octalNum[i] = n % 8;  // 存储余数
            n = n / 8;  // 更新被除数
            i++;  // 移动到数组的下一个位置
        }
        // 打印八进制数
        printf("八进制数为: ");
        for (int j = i - 1; j >= 0; j--) {
            printf("%d", octalNum[j]);
        }
        printf("\n");
    }
    
    int main() {
        int decimalNum;
        printf("请输入一个十进制正整数: ");
        scanf("%d", &decimalNum);
        decToOct(decimalNum);
        return 0;
    } 
        </code></pre>
        <p>在这个程序中，<code>decToOct</code> 函数负责将十进制数转换为八进制数。它通过不断地将数除以8并取余数来实现。余数被存储在一个数组中。最后，程序通过反向遍历这个数组来打印出八进制数。用户可以在 <code>main</code> 函数中输入一个十进制正整数，程序将输出对应的八进制数。</p>
    
    </div>
</template>


<script>
export default {
  name: 'ex2',
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