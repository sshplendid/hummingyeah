<template>
  <div class="feed">
    <a target="_blank" :href="imgPrefix + feed.shortCode">
      <img class="img" :src="feed.displayUrl" />
    </a>
    <p> {{ feed.caption }} </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      imgPrefix: 'https://www.instagram.com/p/'
    };
  },
  props: {
    feed: Object
  },
  mounted() {
    console.log('mounted.');
    console.log(this.feed.shortCode);
  }
}
</script>

<style>
.img {
  width: 150px;
  height: 150px;
}
</style>