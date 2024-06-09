<template>
      <nav>
        <router-link to="/"><el-button type="primary">home</el-button></router-link> |
        <router-link to="/about"><el-button type="primary">about</el-button></router-link>|
        <router-link to="/conception"><el-button type="primary">conception</el-button></router-link>|
        <router-link to="/experiment"><el-button type="primary">experiment</el-button></router-link>|
        <router-link to="/Discussion"><el-button type="primary">Discussion</el-button></router-link>
      </nav>
      <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 10px 0 10px 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #337ecc;
}
</style>
