<template>
  <div id="header">
    <b-nav-bar class="navbar navbar-expand-lg navbar-light bg-light">
      <b-navbar-brand to="/">Mutansanade</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right to="/bookcover">작업물</b-nav-item>
          <b-nav-item to="/other">기타&B컷</b-nav-item>
          <b-nav-item to="/instagram">작업일지</b-nav-item>
          <b-nav-text><a href="mailto:hummingyeah@gmail.com">Contact</a></b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>