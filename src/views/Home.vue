<template>
  <div class="home">
    <HeadBar />
    <Slideshow 
      :list="slideList"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import HeadBar from '@/components/HeadBar'
import Slideshow from '@/common/Slideshow'

export default {
  name: 'home',
  components: {
    HeadBar,
    Slideshow
  },
  data() {
    return {
      slideList: [], // 轮播图列表
    }
  },
  // 组件挂载后
  mounted () {
    this.fetchImages()
  },
  methods: {
    // 获取轮播图
    async fetchImages() {
      const res = await this.$http.get('/carousel');
      this.slideList = _.get(res, 'data.data.list', []).map((item, index) => {
        item.url =  `/newsDetail?id=${item.id}`
        return item
      })
    }
  }
}
</script>

