<template>
  <div id="instagram">
    <div id="header">
      <h2>함스타그램</h2>
    </div>
    <Loading v-if="fetching" />
    <Feed v-for="feed in feeds" :key="feed.id" v-bind:feed="feed">
    </Feed>
  </div>
</template>

<script>
import Feed from './components/Feed';
import Loading from './components/Loading';

const _target = '2532030987';
const _fetchUrl = 'https://www.instagram.com/graphql/query/?';
const _queryHash = 'f2405b236d85e8296cf30347c9f08c2a';
const _first = 10;

export default {
  name: 'instagram',
  components: {
    Feed,
    Loading
  },
  data: function () { 
    return {
      fetching: false,
      endCursor: null,
      feeds: []
    }; 
  },
  methods: {
    makeFetchUrl: function() {
      var variables = {
          id: _target,
          first: _first,
          after: this.endCursor
      };
      var encodedvariables = encodeURI(JSON.stringify(variables));
                    
      var url = `${_fetchUrl}query_hash=${_queryHash}&variables=${encodedvariables}`;
      console.log(`url: ${url}`);

      return url;
    },
    fetchFeeds: function (url, feeds) {
      this.fetching = true;
      console.log(`Fetch! ${url}`);
      fetch(url)
      .then(res => {
        console.log(`Fetch status: ${res.status} ${res.statusText}`);
        return res.json();
      })
      .then(json => {
        console.log(json);
        var pageInfo = json.data.user.edge_owner_to_timeline_media.page_info;
        console.log(`${pageInfo.has_next_page} ${pageInfo.end_cursor}`);

        var nodeList = json.data.user.edge_owner_to_timeline_media.edges;    
        nodeList.map(el => {
          console.log(el);
          var content = {};
          content['caption'] = el.node.edge_media_to_caption.edges[0].node.text;
          content['shortCode'] = el.node.shortcode;
          content['displayUrl'] = el.node.display_url;

          feeds.push(content);

        });

        this.fetching = false;
      });
    },
    toogleLoadingImage: function(_switch) {
      if(_switch) {
        document.querySelector('#loadingImage').classList
        .forEach(_class => {console.log(_class);});

        return;
      }

    }
  },
  mounted() {
    var url = this.makeFetchUrl();
    this.fetchFeeds(url, this.feeds);
    console.log(this.feeds.length);
  }
}
</script>

<style>
.invisible {
  display: none;
}
</style>