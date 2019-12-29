import Mock from 'mockjs'
const domain = 'http://zhihu.co/api'

const homeSlideList = {
  code: 0,
  data: {
    list: [
      {
        url: require('../assets/home/1.jpg'),
        img: require('../assets/home/1.jpg'),
        title: '有哪些运动是贵族运动？'
      },
      {
        url: require('../assets/home/2.jpg'),
        img: require('../assets/home/2.jpg'),
        title: '4亿像素是什么体验？',
        fallbackImg: require('../assets/home/2.jpg')
      },
      {
        url: require('../assets/home/3.jpg'),
        img: require('../assets/home/3.jpg'),
        title: '砍价的时候，假装走开有用么？',
        fallbackImg: require('../assets/home/2.jpg')
      },
      {
        url: require('../assets/home/4.jpg'),
        img: require('../assets/home/4.jpg'),
        title: '南水北调工程从历史观来看，对中国的影响能达到什么程度？',
        fallbackImg: require('../assets/home/2.jpg')
      },
      {
        url: require('../assets/home/5.jpg'),
        img: require('../assets/home/5.jpg'),
        title: '长征五号遥三火箭发射成功，对中国航天的意义有多大？',
        fallbackImg: require('../assets/home/3.jpg')
      }
    ]
  }
}
Mock.mock(`${domain}/posts`, 'get', homeSlideList)
