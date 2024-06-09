<template>
    <div id="1-12">
      <h2>实验12：约瑟夫问题</h2>
      <p>n个人围成一圈，从第一个人开始报数，数到m的人出列，再由下一个人重新从1开始报数，数到m的人再出圈，依次类推，直到所有的人都出圈，请输出依次出圈人的编号。</p>
  
      <h3>Input</h3>
      <p>输入两个整数n,m。</p>
  
      <h3>Output</h3>
      <p>输出一行n个整数，按顺序输出每个出圈人的编号。</p>
  
      <h3>题解</h3>
      <p>我们首先定义了一个链表节点结构体Node，用于表示环中的每个人。然后创建了一个函数createCircle，用于创建一个有n个节点的环形链表。接着定义了josephusProblem函数，用于解决约瑟夫环问题。</p>
  
      <pre><code class="code">
  #include &ltstdio.h&gt
  #include &ltstdlib.h&gt
  
  // 定义一个链表节点结构体
  typedef struct Node {
      int number;
      struct Node *next;
  } Node;
  
  // 创建一个有n个节点的环形链表
  Node *createCircle(int n) {
    Node *head = NULL, *prev = NULL, *temp;
    for (int i = 1; i <= n; i++) {
        temp = (Node *)malloc(sizeof(Node));
        temp->number = i;
        temp->next = NULL;
        if (i == 1) {
            head = temp;
            prev = temp;
        } else {
            prev->next = temp;
            prev = temp;
        }
    }
    prev->next = head; // 使链表成环
    return head;
}
// 解决约瑟夫环问题
void josephusProblem(int n, int m) {
    Node *head = createCircle(n);
    Node *temp = head;
    Node *prev = NULL;
    while (temp->next != temp) { // 当链表中不止一个节点时
        for (int count = 1; count < m; count++) {
            prev = temp;
            temp = temp->next;
        }
        prev->next = temp->next; // 移除节点temp
        printf("出圈的人的编号: %d\n", temp->number);
        free(temp);
        temp = prev->next; // 继续下一次循环
    }
    printf("最后出圈的人的编号: %d\n", temp->number);
    free(temp); // 释放最后一个节点
}
int main() {
    int n, m;
    printf("请输入人数n和报数m: ");
    scanf("%d %d", &n, &m);
    josephusProblem(n, m);
    return 0;
}

      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex12'
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