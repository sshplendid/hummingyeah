<template>
  <div>
    <h2>Pintereset</h2>
    <p> 상속 메시지: {{ msg }} </p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
    <p>Work in process</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    makeUrl: function() {
      var sourceUrl = '/mutansan/works-_bookcover/';
      var data = {
        "options":{
          "isPrefetch":false,
          "board_id":"179651541324602015",
          "board_url":"/mutansan/works-_bookcover/",
          "field_set_key":"react_grid_pin",
          "filter_section_pins":true,
          "layout":"default",
          "page_size":25,
          "redux_normalize_feed":true
        },
        "context":{}
      };

      const url = `https://www.pinterest.co.kr/resource/BoardFeedResource/get/?source_url=${sourceUrl}&_=1567173852122&data=${encodeURI(JSON.stringify(data))}`;
      
      return url;
    },
    fetchPins: function() {
      fetch(this.makeUrl())
      .then(res => {
        return res.json();
      })
      .then(json => {
        var pins = json.resource_data_cache.data;
        
        pins.filter(pin => pin.domain)
        .map(pin => {
          var filteredPin = {
            imageSignature: pin.image_signature,
            title: pin.title,
            image: pin.images.orig,
          };

          console.log(filteredPin);

          return filteredPin;
        })
      });
    }
  },
  mounted () {
    this.fetchPins();
  }
}
</script>

<style>

</style>