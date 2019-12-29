<template>
  <div>
    <div class="header">
      <div class="header_time">
        <div>{{dateText}}</div>
        <div>{{monthText}}</div>
        <div class="line"></div>
      </div>
      <div class="header_title">
        知乎日报
      </div>
    </div>
  </div>
</template>

<script>

import { getTime } from '../utils/tools'
const monthMap = {
  1: '一月',
  2: '二月',
  3: '三月',
  4: '四月',
  5: '五月',
  6: '六月',
  7: '七月',
  8: '八月',
  9: '九月',
  10: '十月',
  11: '十一月',
  12: '十二月',
}
console.log('aaa', getTime('date'))
export default {
  name: 'HeadBar',
  props: {
    
  },
  data() {
    return {
      dateText: getTime('date'),
      monthText: monthMap[getTime('month')]
    }
  }
}
</script>

<style lang='less' scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0.6rem;
}
.header_time {
  position: relative;
  padding: 0 1.1rem 0 0.4rem;
  div:nth-child(1) {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 3px;
  }
  div:nth-child(2) {
    font-size: 0.85rem;
  }
  .line {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background-color: #777;
    transform: scaleX(0.5)
  }
}

.header_title {
  margin-left: 1.1rem;
  font-size: 1.3rem;
  font-weight: 900;
}
</style>