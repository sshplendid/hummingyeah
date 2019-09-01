<template>
  <div id="instagram">
    <div id="header">
      <h2>작업일지</h2>
    </div>
    <b-card-group deck>
      <Feed v-for="feed in feeds" :key="feed.id" v-bind:feed="feed">
      </Feed>
    </b-card-group>
    <Loading v-if="fetching" />
  </div>
</template>

<script>
import Feed from '../components/Feed';
import Loading from '../components/Loading';

const _target = '2532030987';
const _fetchUrl = 'https://www.instagram.com/graphql/query/?';
const _queryHash = 'f2405b236d85e8296cf30347c9f08c2a';
const _first = 100;

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
    fetchFeeds: async function (url, feeds) {
      this.fetching = true;
      var res = await fetch(url);
      if(res.status === '200') {
        alert('fetch api error.');
        console.error(res);
        return;
      }
      var json = await res.json();
      var pageInfo = json.data.user.edge_owner_to_timeline_media.page_info;
      
      var nodeList = json.data.user.edge_owner_to_timeline_media.edges;    
      nodeList.map(el => {
        var content = {};
        content['caption'] = el.node.edge_media_to_caption.edges[0].node.text;
        content['shortCode'] = el.node.shortcode;
        content['displayUrl'] = el.node.display_url;
        feeds.push(content);
      });
      this.fetching = false;
    },
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