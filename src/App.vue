<template>
<div id="app">
  <Header></Header>
  <!-- 라우트 아울렛 -->
  <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
  <div id="view">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Header from './views/Header';

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
</style>
