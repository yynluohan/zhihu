<template>
  <div class="new_container">
    <div class="richContent" v-html="item.content"/>
  </div>
</template>

<script>

import { getLoSearch } from '../utils/tools'
import _ from 'lodash'

export default {
  name: 'NewDetail',
  data() {
    return {
      item: {}
    }
  },
  mounted() {
    this.fetchItem()
  },
  methods: {
    async fetchItem () {
      const res = await this.$http.get('/news');

      console.log('HHHH', res)
      console.log('HHGGG2', getLoSearch())

      console.log('FFFF',  _.get(res, 'data.list', []))
      this.item = _.get(res, 'data.list', []).filter(x => x.id == getLoSearch().id)[0]
      
    }
  }
}
</script>
<style lang='less'>
.new_container {
  width: 100vw;
  overflow: hidden;
}
.richContent {
  width: 100%;
}
.richContent .content {
  padding: 3px;
}
.richContent .content-image {
  width: 100%!important;
}
</style>>
