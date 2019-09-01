<template>
    <b-card
      style="min-width: 300px; max-width: 500px;"
      :img-src="feed.displayUrl" img-alt="Card image" img-top>
      <b-card-text class="d-inline-block text-truncate" style="max-width: 300px;">
        {{ feed.caption }}
      </b-card-text>
    </b-card>
  <!--
  <div class="feed">
    <a target="_blank" :href="imgPrefix + feed.shortCode">
      <img class="img" :src="feed.displayUrl" />
    </a>
    <p> {{ feed.caption }} </p>
  </div>
  -->
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