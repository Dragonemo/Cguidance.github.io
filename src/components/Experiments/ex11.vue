<template>
    <div id="1-11">
      <h2>实验11：第一次，第二次，成交！</h2>
      <p>因为奶牛们的节食运动给F余下了一大批干草无法处理，所以他准备要开一个拍卖会去出售他的干草。</p>
  
      <h3>题解</h3>
      <p>为了解决这个问题，我们需要找到所有农夫报价中的第m高的价格，因为F只有m批干草，所以他需要确保前m个出价最高的农夫能够购买到干草。</p>
  
      <h4>(1) 不用指针</h4>
      <pre><code class="code">
  #include &ltstdio.h&gt
  
  void swap(int *a, int *b) {
      int temp = *a;
      *a = *b;
      *b = temp;
  }
  
  void bubbleSort(int arr[], int n) {
      int i, j;
      for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  swap(&arr[j], &arr[j + 1]);
              }
          }
      }
  }
  
  int main() {
      int n, m;
      printf("请输入干草的批数(n)和农夫的数量(m): ");
      scanf("%d %d", &n, &m);
      int prices[m];
      printf("请输入每个农夫的报价:\n");
      for (int i = 0; i < m; i++) {
          scanf("%d", &prices[i]);
      }
      bubbleSort(prices, m);
      int minPriceToSell = prices[m - 1];
      printf("F应该以每批草料至少 %d 的价格出售，以确保赚到最多的钱。\n", minPriceToSell);
      return 0;
  }
      </code></pre>
  
      <h4>(2) 用指针</h4>
      <pre><code class="code">
  #include &ltstdio.h&gt  
  void swap(int *a, int *b) {
      int temp = *a;
      *a = *b;
      *b = temp;
  }
  
  void bubbleSort(int *arr, int n) {
      int i, j;
      for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
              if (*(arr + j) > *(arr + j + 1)) {
                  swap(&arr[j], &arr[j + 1]);
              }
          }
      }
  }
  
  int main() {
      int n, m;
      printf("请输入干草的批数(n)和农夫的数量(m): ");
      scanf("%d %d", &n, &m);
      int prices[m];
      printf("请输入每个农夫的报价:\n");
      for (int i = 0; i < m; i++) {
          scanf("%d", &prices[i]);
      }
      bubbleSort(prices, m);
      int minPriceToSell = prices[m - 1];
      printf("F应该以每批草料至少 %d 的价格出售，以确保赚到最多的钱。\n", minPriceToSell);
      return 0;
  }
      </code></pre>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ex11'
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