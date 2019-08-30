<template>
  <a target="_blank" :href="urlPrefix + tagName">
    <span id="hashtag">#{{ tagName }}</span>
  </a>
</template>

<script>

export default {
  name: 'HashTag',
  computed: {
    urlPrefix: 'https://www.instagram.com/explore/tags/%EB%AF%B8%EC%83%9D%EB%AC%BC%EC%9D%B4%ED%94%8C%EB%9D%BC%ED%86%A4%EC%9D%84%EB%A7%8C%EB%82%AC%EC%9D%84%EB%95%8C/'
  },
  mounted () {
    console.log(urlPrefix);
  }
}
</script>

<style>
</style>
