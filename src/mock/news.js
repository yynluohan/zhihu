import Mock from 'mockjs'
const domain = 'http://zhihu.co/api'

const newsList = {
  code: 200,
  message: 'ok',
  list: [
    {
      id: '1',
      title: '有哪些运动是贵族运动？',
      author: '作者 / Emma',
      time: '2019/12/20',
      img: require('../assets/home/1.jpg'),
      content: `<div class="content">
      <p>十几年前，我误入了英国的一所贵族女校，与贵族、土豪千金们同窗 4 年。</p>
      <p>一入豪校深似海。</p>
      <p>永远在鄙视链最底端的我，深深体会到了“<strong>何为阶级</strong>”。</p>
      <p>即使在运动这件事上，英国也有完整的鄙视链。</p>
      <p>工人阶级做的运动，在英国被称为 Prole Sports。</p>
      <p>特点是：强调<strong>身体接触</strong>和<strong>巨大的体力付出，</strong>装备简单，随时随地能嗨起来；像拳击、足球、篮球这种 。</p>
      <p>而贵族崇尚的运动，门槛就高多了，且危险系数高，因此具有很强的<strong>排他性</strong>。比如马球、马术和滑雪。</p>
      <p>贵族运动的特点是：<strong>极少人与人间的身体接触</strong>。</p>
      <p>但凡有过多身体接触的项目，贵族们都觉得 low (跳舞和做爱除外)。</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-f9d44037b499b656e992458a60e54b55_b.jpg" alt=""></p>
      <p>国内被视为“高逼格”的运动（比如高尔夫），在英国属于中产或中高产阶级的消遣。</p>
      <p>这个阶级的人，与贵族一样，会去<strong>有门槛的私人俱乐部做运动</strong>，而且也<strong>不崇尚太多身体接触。</strong></p>
      <p>但他们的运动理念，却和贵族不同。</p>
      <p>运动对于贵族来说，<strong>是纯粹的消遣</strong>；</p>
      <p>而不少中产阶级，则把运动当作一种<strong>工作社交&amp;扩大交际圈的手段</strong>。</p>
      <p>包括现在流行的<strong>健身</strong>，也是一种非常“中产阶级”思维的产物，一种“能让我<strong>变得更好更美更受欢迎</strong>”的运动。</p>
      <p>这种<strong>隐藏功利性目的</strong>的运动，英国贵族基本不会碰。</p>
      <p>歪个楼，说个有趣的现象：</p>
      <p>一到英国假期，你会发现，中产阶级都喜欢去些气候怡人、没啥挑战的地方看看世界减减压。</p>
      <p>但贵族们，则更喜欢到极端的地方：</p>
      <p>要么去那种<strong>最冷最有钱</strong>的国家滑雪（瑞士），要么去<strong>最热最穷</strong>的地方体验人生（非洲或加勒比海岛），不会有中间地带。</p>
      <p>我以前一直以为，贵族都好吃懒做，喜欢享乐。</p>
      <p>但观察发现：他们追求的不是“享受”，而是一种<strong>极端、极致、没有太多条条框框的体验。</strong></p>
      <p><strong>这些体验可能是危险的，艰辛的，甚至让人感到痛苦的，但它一定是有挑战且记忆点极深的。</strong></p>
      <p>具体列举一二， 让大家感受下英国上流社会的酸爽~</p>
      <ul><li><strong>Fox hunting （猎狐运动）</strong></li>
      </ul><p>狩猎是英国最古老的贵族运动。</p>
      <p>800 多年前，王室会邀请客人到皇家森林打猎，刚开始主要打野鹿和野猪。</p>
      <p>后来，慢慢变成猎狐。</p>
      <blockquote>英国的气候适合狐狸生长。<br>一到秋天，狐狸遍地。<br>它们会四处破坏农庄，蚕食庄稼，让农民很头疼。<br>为了应对，农民只好花巨资驯养大量猎犬和马匹来保护农庄。<br>英国贵族见状后，马上来救场。<br>他们一边用猎狐来满足自己的狩猎喜好，一边还能为民除害，感觉非常爽。</blockquote>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-ef8a062f88200600daab8fe8f1a5a34a_b.jpg" alt=""></p>
      <p>猎狐我没玩过，所以也只是听同学说过它的魅力。</p>
      <p>英国贵族称之为“<strong>the greatest sport on God’s green earth</strong>” (天地间最伟大的运动)。</p>
      <p>狩猎时，你会在森林里</p>
      <p>- 看到大自然最美的风景;</p>
      <p>- 感受到人与人之间因“极度危险”而收获的生死之交；</p>
      <p>- 体会活在当下、专注眼前、逃离现实的快乐；</p>
      <p>- 发挥需要多年积累才获取的技能；</p>
      <p>- 享受追逐捕猎带来的刺激&amp;快感；</p>
      <p>- 当然还有捕猎后的酒色狂欢。</p>
      <p><strong>（与姿色不错的乡村妹子, 来一场短暂而激情四射的乡村爱情，也是猎狐运动的重要组成部分）</strong></p>
      <p>这项运动，完全涵盖了“极端、刺激、没有条条框框、挑战大、记忆点深”这些贵族最爱的特点，难怪几百年来一直盛行。</p>
      <p>不过因为太血腥，猎狐在 2004 年，被法律禁止了。</p>
      <p>当时有报道说：“也许就像 piáo chāng 一样, 这是一项古老、残忍、不道德、<strong>但却无法完全被禁止、让人热血沸腾</strong>的运动”。</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-6c72c8b18637fd13fa3b206d55ac6a7e_b.jpg" alt=""></p>
      <p>除了猎狐外，英国不少贵族运动（马球、马术、赛马），都和马有关。</p>
      <p>在女校上学时，我发现很多同学<strong>第一份贵重的生日礼物</strong>，都是一匹马。</p>
      <p>她们喜欢马，就像我们喜欢自拍。</p>
      <p>即使老了青春不再了，这个爱好也不会丢。</p>
      <p>英女王就是个很好的例子。</p>
      <p>她 4 岁获得了人生的第一匹马。</p>
      <p>今年女王 93 岁了，你还能在马背上看到她。</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-667989e37fe34440172a47a584bb919a_b.jpg" alt=""></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-bd2f0a644a0e8c84f6495294b57a65b9_b.jpg" alt=""></p>
      <ul><li><strong>D of E (一种野外求生的活动) </strong></li>
      </ul><p>这玩意儿在英国相当盛行，全称为<strong>D</strong>uke <strong>of</strong><strong>E</strong>dinburgh (爱丁堡公爵活动)，是女王的老公 ---<strong>爱丁堡公爵发起的</strong>，意在培养年轻人热爱大自然、苦中作乐、不屈不挠的精神。</p>
      <p>哈里王子说，自己第一次和梅根公主旅行，就是<strong>相约在非洲博兹瓦纳的一个深山里</strong>，在 D of E 式的野营中，情定终身的。</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-258ad3be1b1e5a7ce82fef1765672e7d_b.jpg" alt=""></p>
      <p>当年我头脑发热，也参加过 D of E。</p>
      <p><strong>那真是一生最 “找抽”的经历。</strong></p>
      <p>我一个瘦弱女生，肩背二三十斤重的行囊（里面装着帐篷、锅碗瓢盆、一星期的干粮等等），在法国某深山参加徒步越野活动。</p>
      <p>一周 7 天，吃喝拉撒全在那儿。</p>
      <p>而且全程<strong>没得洗澡</strong>，也<strong>没有厕所，</strong>拉个粑粑都要自己先挖个洞，然后再埋起来.....</p>
      <p>生火搭帐篷什么的，全凭自己一双手，都是技术活。</p>
      <p>而且，屋漏更遭连夜雨，那几天还连着下雨，打湿了我的帐篷，第二天背着个湿帐篷，巨重！</p>
      <p>晚上重新把湿帐篷支起来，发现在包里捂了一天，全臭了。</p>
      <p>我就在发臭的帐篷里，和飞虫为伴。汗水雨水泪水加一起，那个酸辣。</p>
      <p>一周没得洗澡，我的头发早已不是一根一根的存在，而是一缕一缕板结在一起。</p>
      <p>真后悔当时没拍个照。</p>
      <p>到了第 7 天，当我拿着湿烂的地图，摸索走到最后一公里路的时候，我哭了。</p>
      <p>因为一生都没试过这么累、这么脏、这么艰苦过。</p>
      <p>现在想起来，还会有股臭波鞋味飘过~</p>
      <p>这种苦逼的野外求生活动，威廉王子、哈利王子以及他们的朋友圈，居然都参加过，而且反复参加，显然人家是很 enjoy 的。</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-3399cebeb992f8813234ab452a352354_b.jpg" alt=""></p>
      <p>在英国女校的经历，让我看到了贵族爱做的运动, 追求的体验，<strong>都不是常规的享受</strong>, 而是一种极端经验之外、记忆点很深的东西。</p>
      <p>其实贵族也好，平民百姓也好，人到头来（如帕斯捷尔纳克所言），<strong>“不是活一辈子，不是活几年几月几天，而是活那么几个瞬间”。</strong></p>
      <p>我万万没有想到：这些从小就享尽荣华富贵、看遍人间美景的豪门贵族，在制造“难忘瞬间”和“幸福感”这件事上，会比我们吃力那么多......</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-b97d48f143244d313ecd36d2024c399c_b.jpg" alt=""></p>
      <hr><p>其他海外文化&amp;经历的相关回答：</p>
      <p><a href="https://www.zhihu.com/question/27063463/answer/238913060">你认识的有钱人是怎样生活的？</a></p>
      <p><a href="https://www.zhihu.com/question/39866370/answer/90173372">谁给你留下了最深的印象？</a></p>
      <p><a href="https://www.zhihu.com/question/52515329/answer/279852914">你感觉法国最让人不解的是什么？</a></p>
      <p><a href="https://www.zhihu.com/question/31151677/answer/122864943">美国人和英国人在思维方式上有哪些不同？</a></p>
      </div>`
    },
    {
      id: '2',
      title: '4 亿像素是什么体验？',
      author: '作者 / 平老虎',
      time: '2019/12/16',
      img: require('../assets/home/2.jpg'),
      content: `<div class="content">
      <p>我没有 4 亿像素的相机，曾经拥有过 0.5 亿像素的 Canon 5DSr。（关于半亿像素，很多不太上网的新手朋友有质疑，有关说明在文章最后）</p>
      <p>但是我喜欢拍摄接片。然后买了一台 ipano 电子云台。</p>
      <p>2014 年在平遥摄影展，看到了程玉杨老师的大画幅相机，是这样的：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-ad779bead852a2a1f275ed86afc0ec19_b.jpg" alt=""></p>
      <p>上图是两米高底片的相机，然后有一张 1 米左右原大照片拍摄的色达，我入镜是为了对比：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-8e198e1055791fc9258b6766fa53f115_b.jpg" alt=""></p>
      <p>看完以后，我就萌生了从技术上拍摄色达高像素、大接片的想法。</p>
      <p>第二年 8 月，我背着三台相机、四个镜头（还要拍其他内容），媳妇背着 ipano 接片设备上了山。</p>
      <p>最终组合是 Canon 5DSr+50mm f/1.4 拍摄，设定好设备自己就拍了：</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-f296c785e68aab22cd7f1b2e0f46ba6b_b.jpg" alt=""></p>
      <p>关于接片的拍摄器材、拍摄注意事项和后期管理、调整颜色等技巧，欢迎：</p>
      <p><a href="https://zhuanlan.zhihu.com/p/57203973">平老虎：一亿像素的震撼，单反全景接片拍摄建议</a></p>
      <p>当然，设备操控需要在高海拔下清晰的头脑。结实稳定的三脚架，好在这个，对于我们这样的照相民工来说不是事儿。下图是 2015 年，去珠峰路上，加乌拉山口，海拔 5100 米。请注意这里不是通常游客的那个位置，那个位置有遮挡。</p>
      <p>三脚架也还是马小路 MT-2541T 碳纤维反折旅游三脚架全景云台套装。</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-9be38c95d1a2cd9314d5578c3ffd5418_b.jpg" alt=""></p>
      <p>拍摄完毕，是 7✖️3 矩阵：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-460b5a048534ac00e76543a876a251dd_b.jpg" alt=""></p>
      <p>win 系统支撑不了，我用苹果系统，使用 Lightroom 接片的：</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-5e872e5475fbf8b4ca86621c47a1d947_b.jpg" alt=""></p>
      <p>接片之后的像素和尺寸</p>
      <p><strong>占硬盘空间 1.02G、5.88 亿像素、41868✖️14039：</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-3c71ea45fa2fc1b2b24c55c85214deea_b.jpg" alt=""></p>
      <p>这是 MacBook Pro 打开预览的状态，等待：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-c8950f8085608e80322a1dab126f3eb1_b.jpg" alt=""></p>
      <p>8%大小时候是这样的：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-0ebe4d3a1ea402a55ca9cd606151c7dd_b.jpg" alt=""></p>
      <p>50%时候是这样的局部：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-00161f82a38c78db9cceb63d54f293a5_b.jpg" alt=""></p>
      <p>100%的时候：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-95031abfd41928e8c5d1cf6fdbdfdb91_b.jpg" alt=""></p>
      <p>知乎缩图比较厉害，大家凑合看。</p>
      <p>这么大小，一般看图软件打不开了，需要用 Photoshop 打开。</p>
      <p>后来，5D IV 问世以后，朋友送我一台，我的 25200 元买的 5DSr，12000 元卖了。因为我更看重高感光度、GPS</p>
      <p>高像素会能多把照片卖点钱，但是后期管理、处理都很辛苦，不划算。</p>
      <p>上面这一张版权已经出售给视觉中国，所以恕我不能给大家。</p>
      <p>这一张照片裁剪后，我通过爱普生艺术微喷输出为 1 米乘 3.5 米，这是打印的过程：</p>
      <p><a href="https://www.zhihu.com/video/1187449952710709248">3.5 米 X1 米照片输出过程</a></p>
      <p>打印完毕的展示：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-2739d4030778e9a2f2965efe080c3299_b.jpg" alt=""></p>
      <p>我整理了一个我们在海拔 5270 米拍摄的珠穆朗玛峰五姐妹的矩阵接片，分享给想玩的朋友。</p>
      <p>如果想了解和体验 5000 万像素 RAW 格式照片，矩阵 16 张接片，最终 4.5 亿像素照片的效果，欢迎<strong>私信给我邮箱</strong>，在我能看到私信且不忙的情况下，我会发给你原始图片，我接完的 RAW 也就是 dng 格式照片，以及我在 Lightroom 中简单修图的 jpg 照片。不保证一定会发，因为其实我发送以后，有 30%知友选择了不看、不回复。</p>
      <p>先声明，照片的著作权是我的，拿到的朋友，仅可作为自己在电脑上玩耍和看图，谢绝其他所有用途。就是下面一张珠峰矩阵接片。下图是原图的 1.2%大小：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-fc65ff2553eaa7e3a6acd578659c31cd_b.jpg" alt=""></p>
      <p>其中局部，知乎一定会压缩：</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-586ad2dc7fbf5c09c7196d92af16f620_b.jpg" alt=""></p>
      <hr><p>分享一张竖接片。五张，从一公里之外到几十米的脚下。帕隆藏布雪景：</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-a735eaee2274290d356835f11ec82010_b.jpg" alt=""></p>
      <p>这个片可是没有太好用途。</p>
      <p>散点式拍摄的美国国家地理 125 周年杂志封面：</p>
      <p>其实拍摄有点难度，场景大约五米宽的走廊，正常拍汇聚线比较严重：</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-8f94552bd0cd57eab4cb9c4c4df7e68c_b.jpg" alt=""></p>
      <p>作为国家地理影展的外展《印象·青岛》邀请的青岛十名摄影师其中之一，我为举办方做了四场讲座，所以有时间认真使用三脚架拍了下面一张图：</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-334370e0441619a01c344210f4f761fb_b.jpg" alt=""></p>
      <p>再补充几张接片，在知乎平台确实没法看过瘾，我试着放几张竖图，在手机可以撸着看：</p>
      <p>上面的 5.88 亿像素接片竖起来，手机看更过瘾：</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-1e130c3d8ca5699d416fc224bfd709bb_b.jpg" alt=""></p>
      <p>色达的夜晚接片，话说夜景的接片费劲，不好认接点：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-1a614634b91427e9490fbad125e29369_b.jpg" alt=""></p>
      <p>原图 1.73 亿的古格王朝遗址日出 180 度接片，6D 十四张合成：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-ef4f9b7d8e18e91a8048f6b48db1e089_b.jpg" alt=""></p>
      <p>扎达土林的光影：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-d6e36bec53298ee76f10667e8f1844e5_b.jpg" alt=""></p>
      <p>波密岗乡接片，五张 Canon 5DSr 竖版接片，1.95 亿像素，现在为原图的 1.6%</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-fe51d6eec42794c27c8eca7092b829e6_b.jpg" alt=""></p>
      <p>当惹雍错云雾：</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-4856a090784169701de9dbf84a463a67_b.jpg" alt=""></p>
      <p>西藏最大的湖泊色林错，貌似除了接片，其他方式不好来表达它的辽阔：</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-c0824e1efa61c3fe0d61558b1c33a4d1_b.jpg" alt=""></p>
      <p>增加一张前几天拍摄日出时候，在胶州湾拍摄到的呼伦湖号航母补给舰，应该是不涉密的。</p>
      <p>Canon EOS 5D Mark IV+EF 100-400mm f/4.5-5.6L IS II USM，五张接片原图 7000 万</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-8bd86810436a2a0936a61e12339de705_b.jpg" alt=""></p>
      <p>还有一些接片，在我拍摄的南迦巴瓦的回答里，南迦巴瓦和加拉白垒，跨越几十公里，拍接片很爽：</p>
      <p><a href="https://www.zhihu.com/question/309825686/answer/581734160">林芝「南迦巴瓦峰」是一个什么景点，有哪些推荐的游玩攻略和特色景观？</a></p>
      <p><strong><strong>这样的照片有什么用呢？</strong></strong></p>
      <p>1、挑战自己的拍照技术。就是和钓 100 斤大鱼一样，鱼不好吃，过程惊心动魄、回味无穷。</p>
      <p>2、商业用途时候，高像素照片能卖的贵一些。有一个月比较幸运，把几年不同时期拍摄的照片卖了五张，单价看大小不同，一般是几 K 吧，然后吃牛肉面时候就可以加一两肉了。</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-ef5133ee5eb1b4b7e9fd0b56a48fdab0_b.jpg" alt=""></p>
      <p><strong><strong>简述接片要点：</strong></strong></p>
      <p>定焦距、定曝光、RAW 格式拍摄</p>
      <p>迅速，稳定转动</p>
      <p>每张重叠 25%以上，如果超广角，重叠最好 50%以上。</p>
      <p>拍的规范在 Lightroom 中接片是非常简单的：</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-08a57ed0118c364a4394fc82eb4adbce_b.jpg" alt=""></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-1eb269cdffda58fc1d829fb116b536b1_b.jpg" alt=""></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-bf7e7d4a0beec9db3b4111d8df4f2deb_b.jpg" alt=""></p>
      <p>关于接片拍摄、合成，我写了一篇文章共大家参考：</p>
      <p><a href="https://zhuanlan.zhihu.com/p/57203973">平老虎：一亿像素的震撼，单反全景接片拍摄建议</a></p>
      <p>也欢迎初学者关注积累数万人次培训经验的摄影入门专栏《36 技学摄影》</p>
      <p><a href="https://zhuanlan.zhihu.com/xuesheying">三十六技学摄影</a></p>
      <p>关于文初写的 Canon 5DSr 是半亿像素，很多新手&amp;不太关心器材&amp;很少上网的朋友对这个说法有疑惑，这个半亿是 2015 年佳能的宣传文案，不信可以百度一下：</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-818039ebbbb54297639e1e58d24ca60c_b.jpg" alt=""></p>
      </div>`
    },
    {
      id: '3',
      title: '砍价的时候，假装走开有用么？',
      author: '作者 / 司马懿',
      time: '2019/12/23',
      img: require('../assets/home/3.jpg'),
      content: `<div class="content">
      <p>讨价还价的过程，就是讨论交易产生的净收益如何分配的问题。比如一件衣服成本 200 元，但是你最多愿意出 500 元买下它，那么这次交易创造的净收益，就是 500-200 = 300 元。</p>
      <p>价格在这个时候，像一个天平准星一样，往左边拨一下，店主占的多一点，消费者少一点；往右边拨一下，消费者多一点，店主少一点。但是无论如何，价格超过 500 元，或者低于 200 元，这个交易是基本不会成交的。</p>
      <p>所以在这里我们可以用三个点，表示「我」和店主之间产生的博弈：</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-7a5768379f298c452e3484da537dce13_b.jpg" alt=""></p>
      <p>店主的底价 200，「我」的底价 500，和中间的价格（假设为 300）。如果按照合作博弈的搞法，大家二一添作五，定价 350，店主拿走 150 的收益，「我」拿走 150 的收益，皆大欢喜。</p>
      <p>但是问题在于现在信息是不对称的，而「我」显然有压低自己最高报价的动机，而店主也有抬高自己成本的动机，所以让「我」和店主自己报，肯定都不会说实话。并且也没有什么第三方来仲裁，所以现在大家只能通过其他的方式来给对方「发送信号」。</p>
      <p>一般来说，发送信号的方式有两种：</p>
      <p>1. 讨价还价；</p>
      <p>2. 拔腿就走；</p>
      <p>经济学意义上说，讨价还价的过程你说什么一点都不重要——因为这就是一个消耗时间<sup>[1]</sup>的战斗(Attrition War)，双方静默着等着谁先沉不住气就行了。因为时间成本更高的人会觉得这样拖下去不值得，而选择提前结束这场战斗。我们日常生活中的所谓的「特别会砍价」和「特别能卖东西」，往往是在讨价还价的过程中，能够给对方提供额外的情绪价值，而对方得到补偿之后，愿意降低一点自己的售价或者出价，让另外一方得到更高的金钱利益。排除掉这部分或正或负的情绪价值，讨价还价的过程无论说什么都是无所谓的，因为反正是没有任何证据证明你说的是真的，双方的信息结构都没有任何更新。</p>
      <p>而当「拔腿就走」的那一瞬间，「我」就在试图给店主发送了一个信号——我说的价就是我能接受的，让我保持合理收益的最高价。</p>
      <p>为什么说是「试图」呢？因为「走」这个动作也并不是不可撤销的，而是可以再回来的。这种情况下店主很可能并不会认为「我」所发出的这个信号非常可信。但是呢，「走」这个动作，又好过空口无凭的说便宜话，因为如果走了再主动回来，意味着自己丧失了一部分的讨价还价的主动权——至少你的底价高于你所说的；当然如果走了店主把「我」叫住，也说明店主报的价格还有下降空间。<strong>其实在这里，不存在「假装」或者「不假装」的问题，因为店主无法判断是不是装的，所以「拔腿就走」就是一个信号的发送和接受的过程。</strong></p>
      <p>所以从这个意义上讲，「拔腿就走」是一个可能给双方带来信息更新的动作，而信息更新自然就面临着策略的变化。</p>
      <p>于是店主现在就面临一个权衡：</p>
      <ol><li>让「我」走；</li>
      <li>拦住「我」，提出一个新的价格。</li>
      </ol><p>如果店主选择让我「走」，那么店主面临一个概率会失去我这个客户，但是也有一个概率我会主动回来，所以这是一个方差比较大，但是收益也比较大的策略；而拦住「我」，则大概率是可以成交的，但是显然店主要放弃一部分的利润了。所以店主的权衡就是：</p>
      <p><strong>在大部分的成交单中以更大的概率获得小利润，还是更倾向于大开大合，以相对较低的概率获得一个高利润。</strong></p>
      <p>经济学中，用来定义这个倾向的叫做「谨慎」。如果店主是「谨慎」的——那么在数学上就体现为效用函数的三阶导数大于零。</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-1f689b6baf6fe600d1d559e87cafb57c_b.jpg" alt=""></p>
      <p>那么也就是说店主倾向于从大量商品的出售中获得小利润，而非从少量商品中获得更大的利润，那么其就大概率会倾向于一些预防损失的行为<sup>[2]</sup>，这个时候假装走开就容易生效；反之，如果店主不是这样的，那么店主可能觉得无所谓，这个时候假装走开就没有效果了。</p>
      <p>所以要想知道假装走开有没有用，可以先给店主一个问卷做做，测一下他 / 她的谨慎倾向，然后根据问卷反馈结果来决定讨价还价中是否采用「假装走开」的策略。</p>
      </div>`
    },
    {
      id: '4',
      title: '南水北调工程从历史观来看，对中国的影响能达到什么程度？',
      author: '作者 / 星球研究所',
      time: '2019/12/24',
      img: require('../assets/home/4.jpg'),
      content: `<div class="content">
      <p><strong>2019 年 12 月 12 日是南水北调中东线全线正式通水五周年纪念日</strong>，在这样一个看似有点特别却也平凡的时刻，我们有必要对南水北调工程做一个更全面的了解。</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-d3c11ce19dc02c8c5d23971889be31c8_b.jpg" alt=""></p>
      <p>北京五棵松地铁站和全国所有地铁站一样，<strong>站台之上</strong>列车年复一年穿梭呼啸，乘客日复一日来往匆匆。但和全国其他地铁站不同，这座<strong>站台之下</strong>仅 3.67 米处，两条巨大的混凝土涵道横贯站台、穿行而过，来自千里之外的滔滔江水由此奔腾北上。</p>
      <p>它们将一路穿越 2 条铁路、4 条河流、8 座过街天桥、23 座立交桥，与 100 多条地下管线纵横交错，最终流向河湖、流向水库、流向千家万户。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-472dff8c15669fdc50dedf7c2de85a62_b.jpg" alt=""></p>
      <p>也许，在站台上穿梭的人们永远都不会感受到，脚下竟是澎湃的水流。整个华北平原之上，40 多座大中城市 260 多个县区、<strong>约 1.2 亿人</strong>也几乎不会感受到，因为一项史无前例的超级工程，自己的生活、城市的命运都早已悄然改变。</p>
      <p>这项工程人称<strong>“南水北调”。</strong></p>
      <p><strong>▼</strong>请横屏观看</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-7bd9d706eab6eed7cef82b67dcc45daf_b.jpg" alt=""></p>
      <hr><p><strong><strong>01、干渴的华北</strong></strong></p>
      <p>在中国，若以人均水资源量计算，<strong>最为“干渴”的地方并非是沙漠广布的西北地区，而是华北平原。</strong>尤其在<strong>京津冀</strong>地区，养育着全国 8%的人口，贡献了全国 10%的 GDP，但人均水资源量却远远低于国际标准中<strong>人均 500 立方米的极度缺水</strong>红线。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-3ffeffaeb3432a1c1bc80531e9d0c40e_b.jpg" alt=""></p>
      <p>不仅如此，日益膨胀的人口、快速扩张的城镇、迅猛发展的工业让流经华北平原的黄河、淮河和海河一度成为全国地表水质量最恶劣的地区，最严重时几乎是“<strong>有河皆枯、有水皆污</strong>”。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-cdd9fe71581be6a0167b00cc9204ca28_b.jpg" alt=""></p>
      <p>水量短缺、水体污染，可用的地表水所剩无几，于是人们不得不超采<strong>地下水</strong>、回用<strong>再生水，</strong>甚至挤占维系生态功能的水源来填补庞大的用水缺口。</p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic1.zhimg.com/70/v2-425b8f4f3c29b1c0fbfe21a667bf95a8_b.jpg" alt=""></strong></p>
      <p>到了 21 世纪初，京津冀的<strong>地下水开采程度均已超过 100%</strong>，一个面积超过 9 万平方千米并且还在不断扩大的<strong>地下水超采区</strong>在华北平原下迅速形成。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-f14ecf337fd906c4e3a3f9e08edd4ff2_b.jpg" alt=""></p>
      <p>在北京，供给城市生活用水的密云水库，仅 1999-2003 年的 4 年间，库存水量就萎缩了 3/4，全市超过 70%的用水量只能靠抽取地下水维持，令北京平原地区的地下水位<strong>以每年 1 米的速度持续下降。</strong></p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic1.zhimg.com/70/v2-74d8e809c6ba6b8c14ca7c78e82deed0_b.jpg" alt=""></strong></p>
      <p>在济南，地下水的严重超采令大量涌泉景观彻底消失，昔日的“泉城”岌岌可危。而在开采更为强烈的河北省部分地区，预计不到 20 年后便会面临无地下水可采的局面。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-251f08f38acd36df229e15cf672fdc50_b.jpg" alt=""></p>
      <p>尽管从 2003 年后的十年里，北京通过各项节水措施，万元 GDP 用水量已下降近七成，22%的用水也已被再生水替代，但地表水稀缺的现实、用水量增长的趋势却依然难以改变，地下水位也依然在逐年下降。</p>
      <p>中国的南北大地本应拥有相同的发展机会，但水资源的极度短缺却成了限制华北地区发展的枷锁，干渴的华北大地迫切地需要新的水源。而千里之外浩瀚的长江，多年平均径流量约 9600 亿立方米，是<strong>黄淮海</strong>三河总径流量的<strong>近 7 倍。</strong>长江之水能否北上?人们怀抱着一线希望。</p>
      <p>然而，要建设一个跨越 1000 多千米的调水工程又谈何容易？</p>
      <hr><p><strong><strong>02、艰难的工程</strong></strong></p>
      <p>早在 1952 年，南水北调的设想就已诞生。但直到 2002 年，大到线路如何布局、规模如何设置，小到渡槽什么结构、管道什么材质，论证了半个世纪后，工程的总体规划才正式出炉。</p>
      <p>这意味着，在数十年后中国大地上将有<strong>东线、中线、西线</strong>三条大型水道纵贯南北，与东西流向的海河、黄河、淮河、长江形成<strong>“四横三纵”</strong>的巨型水网，最终调水规模达 448 亿立方米，约为<strong>长江</strong>多年平均径流量的 4.7%，却几乎是<strong>黄河</strong>多年平均径流量的 80%。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-e9f630f0440b88cab6a1c7eb6cefd3af_b.jpg" alt=""></p>
      <p>尽管那时，国内国外已建成调水工程近 400 项，但南水北调的工程规模之大涉及面积之广、覆盖人口之多均堪称史无前例。因此当 2013 年 11 月 15 日和 2014 年 12 月 12 日东、中线一期工程先后通水，南来之水第一次涌入北方大地的时候，便成为世界水利史上难以忘记的时刻。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-6ea37965cb9662971185c5b9c616da97_b.jpg" alt=""></p>
      <p>可是这滚滚清流背后 又是什么样的故事呢？</p>
      <p><strong>①东线：水往高处流？</strong></p>
      <p>全长 1785 千米的东线工程从江苏扬州一路北上，上跨淮河、下穿黄河，最终将长江之水送至天津城区和山东半岛。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-5204e3ceb16e9aa8c22ac5039c0f7625_b.jpg" alt=""></p>
      <p>沿途中包括<strong>京杭大运河</strong>在内，有数条南北向的河道可作为江水北上的现成通道。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-0e57e219b64097679ef2c498aa5a6662_b.jpg" alt=""></p>
      <p>洪泽湖、骆马湖、南四湖、东平湖等数个南北串联的湖泊可作为天然的调蓄水库。</p>
      <p><strong>▼</strong>请横屏观看</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-dbea72a9962cb5fc4fb9b94c7b2cd722_b.jpg" alt=""></p>
      <p>加之江苏省境内又有江水北调工程作为基础，东线工程似乎已是地利人和，只待水到渠成。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-47d09711c8dc5594122240e4a8ae9565_b.jpg" alt=""></p>
      <p>然而事情却没有这么简单。从调水起点到黄河南岸，地面高程<strong>升高近 40 米。</strong>这意味着想要南水北上，必须实现<strong>“水往高处流”，</strong>直至水流越过最大高程点才可顺流而下，抵达天津或沿引黄济青工程奔向山东半岛。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-9b15edcee9bb50086b8f66ab08492f5c_b.jpg" alt=""></p>
      <p>于是，仅东线一期工程沿线便建有 34 处站点、160 台水泵共计<strong>13 级泵站，</strong>这个世界最大的泵站群从<strong>扬州江都水利枢纽</strong>开始，将长江水逐级提升近 40 米，一路送至黄河南岸。</p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic4.zhimg.com/70/v2-eb9540c7f759d373c84f9dc8b5772e5f_b.jpg" alt=""></strong></p>
      <p>而为了降低泵站群的能耗，其中 1/3 的水泵均使用我国技术人员耗时 3 年自行研发的<strong>灯泡贯流泵。</strong>这种装置拥有平直的流道，水流不需转弯便可直接通过。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-548b5bea234eef064f54e7f699d3cfe9_b.jpg" alt=""></p>
      <p>因此与传统的<strong>立式轴流泵</strong>相比，贯流泵的电能转化率可从 65%提高至 81%，大大提高了运行能效。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-089ae20f19855e67c94eb46640a53cb7_b.jpg" alt=""></p>
      <p>立式轴流泵结构，制图@郑伯容 / 星球研究所</p>
      <p>经由这些泵站，东线一期工程的年调水能力可达到 88 亿立方米，相当于每年为沿线的江苏、安徽、山东各省供给了 600 多个西湖的水量。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-f2a5d26083ff2039559f87df9432e314_b.jpg" alt=""></p>
      <p>相较之下，南水北调中线工程则显得“节能”多了，其干线上仅建有一座泵站，却依然完成了 1432 千米的超远距离调水。这又是如何实现的呢？</p>
      <p><strong>②中线：一渠清水向北流</strong></p>
      <p>2005 年 9 月，在湖北省汉江与丹江交汇口下游 800 米处，一声爆破响彻群山之间。<strong>丹江口大坝</strong>的表层开始进行拆除，不久之后在其上方将会浇筑新的混凝土，令大坝高度加高 14.6 米，水面面积增加至 1022 平方千米，<strong>几乎与三峡库区的水面面积相当</strong>。</p>
      <p><strong>▼</strong>请横屏观看</p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-74241ea860c023361e8a532f7f0fdca7_b.jpg" alt=""></p>
      <p>然而，在一座已服役近 40 年的老坝上重新浇筑一座“新坝”却并非易事。<strong>倘若新老混凝土因温度变化产生不均匀的热胀冷缩</strong>，将令坝体间产生裂缝，后果便不堪设想。因此，除了严格控制混凝土的浇筑温度外，人们在大坝堰体的老混凝土上切割出一道道键槽，并植入一根根钢筋用以加强新老混凝土间的咬合和锚固。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-63a0f813e11e67ff109e343e8a160e0d_b.jpg" alt=""></p>
      <p>而在大坝顶部，则向 20 个垂直伫立的闸墩中植入共计 1164 根钢筋，令闸墩更加坚固。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-1a3b7d6dd8245deb051eb058ece83b2f_b.jpg" alt=""></p>
      <p>加高工程历时近 8 年，升级改造后的坝体变得更高更厚，不仅库容量能满足调水需求，水位高程同时可达到 170 米，比北京高出 100 余米。这就意味着来自丹江口水库的汩汩清水不再需要泵站逐级提升便能一路自流到达北京。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-e6e9bb061812e5971cdd5cecd2c235bb_b.jpg" alt=""></p>
      <p>或是经位于河北保定的<strong>西黑山分水口，</strong>转而向东流入天津。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-174e98e7f5b661067bd97ea8b6241ead_b.jpg" alt=""></p>
      <p>更幸运的是，在秦岭东部分隔长江、淮河流域的分水岭，到了河南南阳的方城县附近，却在连绵的群山中留了一条“缝隙”，人称<strong>“方城垭口”。</strong></p>
      <p>此处两侧山地的高程在 200 米以上，但垭口处却仅有 145 米，可令中线工程的渠道在山峦夹持间穿行而过，避免挖掘数千米的穿山隧洞。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-bede2298f5de69533d08c0324763b8a0_b.jpg" alt=""></p>
      <p>然而鱼和熊掌二者不可兼得，即便不再需要建设泵站，但由于没有任何现成水道可以利用，1432 千米的中线工程将全部从零新建，漫长的修建过程也注定困难重重。</p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic2.zhimg.com/70/v2-1f6eabcff4fa843b11d142049ea72e55_b.jpg" alt=""></strong></p>
      <p>中线工程沿途需<strong>穿越大小河流共 686 条，</strong>为了确保输水水质安全，避免受到洪涝及污染的影响，一座座庞大的“水上立交”横空出世。在其中的 27 座大型<strong>梁式渡槽</strong>上，南来之水源源不断凌空而过，如同一条蜿蜒北去的“天河”。</p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic3.zhimg.com/70/v2-edcddd47574b1a173c154fa6c147bfea_b.jpg" alt=""></strong></p>
      <p>河南省境内，全长达 11.9 千米的<strong>沙河渡槽</strong>中，巨大的 U 形槽段重达<strong>1200 吨，</strong>每次吊装都相当于一次性起吊约 1000 辆轿车。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-34f4897729d31f322360ef2662b46923_b.jpg" alt=""></p>
      <p>而位于其南面的<strong>湍河渡槽</strong>体量则更为惊人，其内径达 9 米、单孔跨度达 40 米，每孔槽段的重量可达<strong>1600 吨。</strong></p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-bb4ef52cc2da7bc9ecc3ed6b2727dd06_b.jpg" alt=""></p>
      <p>面对如此巨大的重量，工程师们干脆放弃了吊装设备，转而采用大型造槽机现场完成混凝土浇筑，就这样一段接一段地，筑造出世界上规模最大的 U 形渡槽。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-4e897c90f3e3ed08e8d5bbfb1eccb16d_b.jpg" alt=""></p>
      <p>然而更多时候，中线工程则以<strong>倒虹吸</strong>的方式，在地表之下穿越道路或河流，其中难度最高、规模最大的便是穿越黄河的<strong>穿黄工程。</strong></p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-9dda78d9d7fa65064f4d632a17e9e44e_b.jpg" alt=""></p>
      <p>黄河北岸，巨大的圆筒形<strong>竖井</strong>内径 16.4 米、井深 50.5 米，几乎可以容纳一座 15 层的高楼。负责掘进隧道的<strong>大型盾构机</strong>也将从这里出发，在深厚的砂土中前行超过 4000 米才能穿越黄河天堑。</p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic1.zhimg.com/70/v2-d17f38d7f0b128c00075d2706db9578c_b.jpg" alt=""></strong></p>
      <p>盾构机的刀盘日夜不休地旋转，被粉碎的砂砾土石随泥浆不断排出，最终在<strong>黄河河床下平均 30 米</strong>处，两条内径达 7 米的巨大的隧洞逐渐出现在世人眼前。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-207438d3c8f8cc2f2e51daaff2a49828_b.jpg" alt=""></p>
      <p>然而规模庞大的穿黄隧洞在建设中却并非一帆风顺，由于砂土中石英含量较高，令盾构机的刀片产生严重的破损，工程人员只能依靠人力前后进出近 400 次，才在充斥着泥水的盾构机前端完成刀盘的修复和加固。最终，在大河之下穿行了 500 多个日夜后，巨大的盾构机终于在河道对岸重见天日。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-8514954c6c925a7add608b9be74c5687_b.jpg" alt=""></p>
      <p>自此，南来之水终于跨越黄河天堑得以继续北上。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-6b56c2eaa95bae4e9eecc167a13c4a52_b.jpg" alt=""></p>
      <p>“上天入地”固然艰难，但在中线工程中约 1/3 的渠段内，即便是平地修渠也面临着<strong>膨胀土</strong>的考验。这是一种吸水膨胀、失水收缩的土壤，剧烈的膨胀收缩下极易造成渠道垮塌。然而在当时，全国上下尚无类似的工程先例，这意味着连设计施工标准都必须从零开始制定。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-a4707661ba33e1cd8115f85cebd971f2_b.jpg" alt=""></p>
      <p>同样必须从零起步的，还有在北京市境内为了防止污染、减少占地而修建的<strong>PCCP 管道。</strong></p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic2.zhimg.com/70/v2-a5731ba8825aabb87f1d9b55386b7549_b.jpg" alt=""></strong></p>
      <p>这是一种复合结构管材，层层包裹的结构令其防渗、抗震、可靠、耐久。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-4f4ed50a951e05f6af1f6f4c0bbe156e_b.jpg" alt=""></p>
      <p>然而中线工程中的 PCCP 管道直径达<strong>4 米</strong>、单管重<strong>78 吨，</strong>工程人员经过大量实验才最终确定建设标准。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-dd625f5b37cbe75768290b51de4ae886_b.jpg" alt=""></p>
      <p>此后，中线工程再经过长约 13 千米的西四环暗涵工程，便可抵达中线工程的终点，<strong>北京团城湖。</strong></p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic4.zhimg.com/70/v2-b0c1ae3e03ddbe9587e84737de3cc15b_b.jpg" alt=""></strong></p>
      <p>这些南来之水将进入城市的各大水厂，或经京密引水渠，反向注入曾不堪重负的密云水库。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-09f5977f962bfef18b2a477dcfdfb57b_b.jpg" alt=""></p>
      <p>至此，中线工程全线贯通，再没有什么能够阻挡滔滔江水一路北上。水道穿山越岭，</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-c18d929092c2f9020272cc7540bc348a_b.jpg" alt=""></p>
      <p>穿越城镇，</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-c95d7f6e100224f9bbbbdf7e809d4adf_b.jpg" alt=""></p>
      <p>与 31 条水渠、51 条铁路和 1238 条公路相互交错。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-04a46a92a5e52395b494875fe9f8f029_b.jpg" alt=""></p>
      <p>全程 27 座渡槽、102 座倒虹吸、17 座暗渠、12 座隧洞、1 座泵站、476 座排水建筑物、303 座控制建筑物，将这条千里水脉逐一串联。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-f2d1e8bc7b4566b945717e8628d91086_b.jpg" alt=""></p>
      <p>然而庞大的泵站、巨大的水渠仅仅只是整个工程的冰山一角。<strong>水质如何保障？污染如何治理？移民如何安置？文物如何保护？造成的生态问题又该如何补偿？</strong>种种问题横亘在人们眼前，让这项本已困难重重的工程愈发举步维艰。</p>
      <hr><p><strong><strong>03、幕后的故事</strong></strong></p>
      <p>2002 年，南水北调终于正式开工，但东线工程沿线的城市却显得忧心忡忡。不过这并不出人意料，毕竟在当时的工程沿线，黄河以南的 36 个水质断面中仅有<strong>1 个</strong>达到地表水 III 类标准，有的断面污染物甚至<strong>超标百余倍</strong>，完全无法作为饮用水源。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-c8b3b547c51adb4ff4668bdb3ae7a7d7_b.jpg" alt=""></p>
      <p>这意味着，东线工程必须在 10 年内达到全线 III 类及以上水质，才能满足通水要求。一项庞大的污染治理工程刻不容缓，于是这 10 年内，<strong>山东超过 700 家造纸厂、江苏 800 多家化工企业皆因排放不达标纷纷关停。</strong></p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic1.zhimg.com/70/v2-6f99cd0351d95f38d9555c31897a1a08_b.jpg" alt=""></strong></p>
      <p>水面上，两省约<strong>4000 艘水泥船、24000 艘挂桨机被淘汰或拆改</strong>。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-54765e6d3e878b4a658092f0746fdae3_b.jpg" alt=""></p>
      <p>河岸边，仅江苏省沿线就建成 17 座船舶垃圾收集站、43 座污水 / 油回收站。到了 2016 年，沿线共<strong>9650 千米的污水收集管网</strong>，以及<strong>接近全省 1/5 的污水处理能力</strong>，时刻镇守着入流河道的排放关卡。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-39d9993658e4007032ef479478e9a500_b.jpg" alt=""></p>
      <p>加之大面积的湖泊湿地，共计<strong>426 项</strong>治理工程如“铠甲”一般，装备在 1000 多千米的线路上。到 2012 年东线通水前夕，<strong>沿线主要污染物入河总量减少 85%，全线 36 个监测断面终于全部达标。</strong></p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-6ed8c3ce62a97208a06b76f5ff5ef3de_b.jpg" alt=""></p>
      <p>而反观中线工程，其<strong>干渠水道全程封闭</strong>，两侧还<strong>划定了严格的水源保护区</strong>，基本杜绝了外界污染带来的影响，堪称一条“<strong>清水走廊</strong>”。但人们真的可以高枕无忧了吗？在中线水源地丹江口水库，20 世纪 80 年代时水质达到 I 类的时间约有 2/3，但到了 21 世纪初却仅有 1/3。<strong>如何维持水源地的水质状况成为了无法被忽略的问题。</strong></p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-13be0387773df385667fe1b8e17bec64_b.jpg" alt=""></p>
      <p>然而，水库上游流域涉及陕西、湖北、河南三省内共计 8 市 43 县以及 600 多个乡镇，若要溯流清源将是一项浩大的工程。但人们别无选择，于是在丹江口水库上游流域，<strong>采矿冶炼、黄姜生产、汽车电镀众多排放不达标的高污染行业纷纷关停</strong>。截至 2014 年，城市污水处理厂由 5 座增长 174 座，垃圾处理场则由 1 座增至 99 座，还有共 1.7 万平方千米的水土流失面积得到治理。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-e05141aaa50240ee031caa96cac0ab4d_b.jpg" alt=""></p>
      <p>自中线工程通水至今，<strong>输水水质达到 I 类的断面比例从 30%增长至 80%</strong>，历时超过 8 年的水源保护工程的效果开始逐渐显现。</p>
      <p>然而。青山绿水的丹江口水库在为中线工程提供绝佳水源的同时，却也付出了巨大的代价。当水库水位成功抬高 13 米的同时，周边超过 300 平方千米的土地将没入茫茫碧波之下，这就意味着曾经生活在库区周边 40 个乡镇、441 个村的<strong>共计超过 34 万人将不得不搬离原本的家园。</strong></p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic1.zhimg.com/70/v2-733552afa0710a4e5b48b1d753aff458_b.jpg" alt=""></strong></p>
      <p>加之工程干线沿途占用土地，又需搬迁安置约<strong>9 万人</strong>，整个中线工程可谓是一项浩大而艰巨的移民安置工程。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-d4b0c51fc3e3bc25980ecc3f2f7cc136_b.jpg" alt=""></p>
      <p>于是，在即将被淹没的迁出地，每一村、每一户、每一间房、每一块地、每一口水井、每一片果树开始被调查、计算、公示，离开原有土地的人们，将按照这些土地被征收前<strong>三年平均产值的 16 倍</strong>获得<strong>征地补偿款</strong>和<strong>移民安置费。</strong></p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic4.zhimg.com/70/v2-8df8f24d45df41cb95e41b57947c1d43_b.jpg" alt=""></strong></p>
      <p>2009 年 8 月 15 日，河南省南阳市淅川县滔河乡姬家营村移民搬运自家的家具，图片来源@视觉中国</p>
      <p>而在迁入地，<strong>移民新村</strong>的建设同样紧锣密鼓。由于每家每户情况复杂，仅设计阶段就有十余套不同户型供移民群众自行选择。新村社区中，交通、供电、供水、排水学校、环保等公共基础设施也是一应俱全，大多数人的居住体验将从人均 20 平方米的土木房、土坯房，上升至人均 24-34 平方米的砖混楼房。</p>
      <p><strong>▼</strong></p>
      <p><strong><img class="content-image" src="http://pic3.zhimg.com/70/v2-f9206377997ddec3a37494b67706725a_b.jpg" alt=""></strong></p>
      <p>此外，为了让迁移至此的人们有田可耕、有地可种，迁入地必须在有限的耕地中挤出条件优良的土地进行分配。人们一块块量、一遍遍算，最终确定了搬迁后<strong>人均大棚菜地不少于 0.4 亩，水田、果园不少于 1.05 亩，或旱地不少于 4 亩的分配标准。</strong>而搬迁前人均耕地仅有 0.96 亩。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-ca93bef4a0b0b9d75fc0100084a93c77_b.jpg" alt=""></p>
      <p>至此，一切都已万事俱备，超过 34 万移民将搭乘浩浩荡荡的车队，挥别祖祖辈辈生活的故土。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-eab4329436efd2fbd6f308fe7a1e7af5_b.jpg" alt=""></p>
      <p>他们将在一片陌生的土地重新建立未来的家园。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-3e8fd8a1f7c778bde65b9072314ddf92_b.jpg" alt=""></p>
      <p>丹江口水库的移民搬迁安置工作要在 2 年内基本完成，强度之大在世界水利移民史上前所未有。但艰难的并不只是工程强度本身，数十万移民告别的也不只是房屋和耕田，而是他们最熟悉的土地，是他们赖以生存的生活方式，也是他们世世代代的生活记忆。</p>
      <p>因此若要他们真正融入新的家园，需要的也不仅仅是政府的支持和补偿，还有当地人的一视同仁、自己的勤劳、汗水和勇气以及一段漫长的时间。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-09ed433ed755024cab62a650c384df3e_b.jpg" alt=""></p>
      <p>丹江口水库水位抬升后，受到淹没威胁的除了大量村庄、农田，还有 214 处文物保护点，其中就包括建于明代初期的武当山<strong>遇真宫。</strong>1967 年丹江口水库初次蓄水时，武当山古建筑群中的<strong>净乐宫</strong>就因技术限制，永远沉没在水下。而 40 多年后的遇真宫绝不能再重蹈覆辙，于是人们制定了一个几乎“孤注一掷”的方案。</p>
      <p>遇真宫现存的主体建筑和宫墙将进行整体拆除，所有的拆卸构件标记存放，待地面垫高后再重新复原。而山门、东西宫门三座建筑，将从地面整体抬高 15 米，相当于 5 层楼的高度。</p>
      <p><strong>▼</strong>请横屏观看</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-a5cd97c8fa739633f774c2ea8fff3ef0_b.jpg" alt=""></p>
      <p>建筑主体由钢架加固，基座由混凝土浇筑，下方则由数十根千斤顶，将数千吨的山门一点点向上顶升。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-3e19a2a68dae3623cb9d7c5420100c55_b.jpg" alt=""></p>
      <p>近半年后，三座山门将到达顶升高度。而在不久的将来，这片占地 2.4 万平方米的建筑群也将在全面加高的堤岸上恢复往日的模样。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-51f83a38306b3f8e378a3e293045d36e_b.jpg" alt=""></p>
      <p>东、中线工程沿线总共涉及文物 710 处，让这项庞大的调水工程也成为一项规模空前的文物保护工程。从规划到施工期间，为了保护沿途的古迹遗址，工程经历多次让路、改线。而沿线区域的考古调查和紧急发掘更是从未停止，其中的 9 个项目先后被列入“全国十大考古发现”。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-c8ecf0d280e23e9711b40bc825780d47_b.jpg" alt=""></p>
      <p>2013 年 11 月 14 日，距离中线工程正式通水还有不到 400 天，也正是在此时，在丹江口水库下游约 400 千米处，一座长 2835 米的大坝横亘于汉江之上，人称<strong>“兴隆水利枢纽”。</strong></p>
      <p>在其下游不远处，又有一条西南方向蜿蜒而来的水渠，每年将约 30 亿立方米的长江水注入汉江河道。这就是<strong>引江济汉</strong>工程。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-6d338c07d8becdf2a152575766d8c6bd_b.jpg" alt=""></p>
      <p>为避免中线工程调水导致汉江下游水位降低，影响农田灌溉和河流生态，<strong>兴隆水利枢纽和引江济汉工程将作为南水北调配套建设的生态补偿工程</strong>，通过上游蓄水、下游补水，令上游的灌溉面积增加 60%以上，下游多年平均水位抬高 0.15-0.30 米。加之闸站的改建扩建以及局部航道的整治，从长江中游的荆州到汉江中游的襄阳，通航距离也将减少 600 千米。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-f5c1cabe73b19968194dced773ea1e3a_b.jpg" alt=""></p>
      <p>污染治理工程、水源保护工程、移民安置工程、文物保护工程、生态补偿工程……当涌入华北的滔滔江水为这片土地带来新的机遇时，却很少有人留意到，在南水北上的幕后还有多少“看不见”的工程。</p>
      <hr><p><strong><strong>04、下一个奇迹</strong></strong></p>
      <p>南水北调一期工程的干支渠总长达 5599 千米，混凝土浇筑量 6300 万立方米，相当于三峡工程的 2 倍之多，可谓是我国水利工程建设的又一大奇迹。</p>
      <p><strong>工程通水后，长江水可直接供应近 300 个县市，替代北京城区超过七成的供水，郑州中心城区的全部供水，天津 14 个区的全部供水，以及石家庄、邯郸、保定、衡水等城市 75%以上的主城区供水。</strong></p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-16a14a4e032bbe7c412d7b0b9417a93c_b.jpg" alt=""></p>
      <p>上万平方千米的农田，可新增近 20 亿立方米的灌溉用水，而曾经被城市挤占的农业用水以及污水净化处理后的再生水，<strong>共计近 60 亿立方米的水资源将重新流入农田</strong>。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-2277afb32d947aafd030cb00cfdf9a35_b.jpg" alt=""></p>
      <p>在南水的补给下，密云水库的蓄水量逐年刷新，目前已突破 26 亿立方米，<strong>是 2003 年的 3 倍之多</strong>。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-4ae153a56a435d1d63344dcb0675ad10_b.jpg" alt=""></p>
      <p>可用水源的增加，令北方地区的<strong>地下水每年可减采近 50 亿立方米</strong>，甚至还有余量回补原先的亏空。<strong>截至 2018 年底，北京市地下水位比南水进京前回升了 2.63 米</strong>，而随着地下水使用的削减，<strong>北京自来水硬度下降近 70%</strong>。</p>
      <p>整个华北地区，更有超过<strong>500 多万人结束了长期饮用高氟水和苦咸水的历史。</strong></p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-b6f72a817751dbe53c4575f9d34a8611_b.jpg" alt=""></p>
      <p>在繁华的天津中心城区以及荷花荡漾的白洋淀，由于得到充足的生态补水，水体污染也得到明显改善。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-fdfc6a48fae0c5ce856d0649a4cccdee_b.jpg" alt=""></p>
      <p>此外，东线一期工程建设后，京杭大运河成为一条自黄河以南直至长江全线都可通航的“黄金水道”，新增运力达到 1350 万吨，<strong>相当于在水上架设了一条新“京沪铁路”</strong>。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic4.zhimg.com/70/v2-ca55b750b33e4325cece4b188cd13423_b.jpg" alt=""></p>
      <p><strong>是的，南水北调确实是一个奇迹</strong>，是一个在重重难关中规划论证、在重重限制中建设运营、曾经面临种种争议，却依然实现的奇迹。</p>
      <p>也是一个由数十万移民群众、数十万工程建设者、数千名科技工作者，以及那些永远沉睡在岗位上的人们共同创造的奇迹。</p>
      <p><strong>▼</strong></p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-34f5c410e533636fdea201a0ae7b4660_b.jpg" alt=""></p>
      <p>今天，源源不断的南来之水为长年干渴的华北大地带来了片刻的喘息，带来了发展的机遇。</p>
      <p>而未来如何用好南水？如何节约用水？如何让翻山越岭而来的长江水不至于成为杯水车薪？</p>
      <p>对受益于南水北调工程的 40 多座大中城市、260 多个县区、近 1.2 亿人来说，这些问题正等待着他们的答案。</p>
      <p><strong>这片土地上的下一个奇迹，也等待着他们去创造。</strong></p>
      <hr><p><strong>全文完，感谢阅读。</strong></p>
      <p><strong>想了解一个你从未遇见的中国？</strong></p>
      <p>欢迎点击由<strong>人民网、中国青藏高原研究会、第二次青藏科考队和星球研究所</strong>联合出品的，</p>
      <p><strong>典藏级国民地理书——《这里是中国》，让我们重新发现中国之美。</strong></p>
      <hr><p><strong>创作团队</strong></p>
      <ul><li>编辑：张楠</li>
      <li>图片：余宽、刘白</li>
      <li>设计：陈睿婷、郑伯容</li>
      <li>地图：王朝阳</li>
      <li>审校：王朝阳、 @云舞空城</li>
      </ul><p><strong>【致谢】</strong>南水北调中线干线工程建设管理局宣传中心，以及水利部发展研究中心王亦宁高级工程师为本文的创作提供了有力支持，特此感谢！</p>
      <p><strong>主要参考文献</strong></p>
      <ol><li>北京市南水北调工程建设委员会办公室，北京市文物局. 《饮水思源——南水北调中线工程图录》[M]. 北京燕山出版社，2014</li>
      <li>国务院南水北调工程建设委员会办公室. 《南水北调工程知识百问百答》[M]. 科学普及出版社，2015</li>
      <li>《中国南水北调工程建设年鉴》编纂委员会. 《中国南水北调工程建设年鉴 2017》[M]. 中国电力出版社，2017</li>
      <li>文丹. 《南水北调中线工程》[M]. 长江出版社，2010</li>
      <li>陈志康等. 《南水北调中线一期水源工程丹江口大坝加高设计》[C]. 大坝安全与新技术应用，2013</li>
      </ol><p><strong>↑一群国家地理控，专注于探索极致世界</strong></p>
      </div>`
    },
    {
      id: '5',
      title: '长征五号遥三火箭发射成功，对中国航天的意义有多大？',
      author: '作者 / 太空精酿',
      time: '2019/12/28',
      img: require('../assets/home/5.jpg'),
      content: `<div class="content">
      <p>长征五号强势复出！空间站、火星探测、探月取样…它们都在等它</p>
      <p><strong>12 月 27 日 20 时 45 分，长征五号遥三运载火箭在中国文昌航天发射场点火升空，2000 多秒后将实践二十号卫星送入预定轨道，发射飞行试验取得圆满成功。</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-2c1989c286812048267c1619efea222d_b.jpg" alt=""></p>
      <p>长征五号遥三火箭发射（图片来源：我们的太空 史悦 吕炳宏）</p>
      <p><strong>2019 年是中国航天的“超级大年”，实现了一系列举世瞩目的成就</strong>：嫦娥四号和玉兔二号实现人类探测器首次着陆月球背面；玉兔二号成为人类史上工作时间最长月球车；长征十一号火箭实现中国首次海上平台发射；北斗卫星导航系统完成最核心的中圆轨道和同步倾斜轨道卫星部署；两枚快舟 1A 火箭实现同一发射场间隔 6 小时快速发射；三款商业火箭（捷龙，双曲线一号，零壹 OS-1）首飞；年度火箭发射 34 次（美国 27 次），继 2018 年后再次成为世界第一，等等。</p>
      <p>在这些辉煌之外，还有一个“全村人的希望”，那就是大家期待已久的<strong>长征五号的成功复飞。</strong></p>
      <p><strong>一、为什么需要长征五号火箭</strong></p>
      <p><strong>长征系列火箭是我国航天技术发展的绝对主力支撑</strong>，承担了我国 96.4%的发射任务，发射航天器总质量占中国发射总质量的 99.2%[1]，重要性不言而喻。</p>
      <p><img class="content-image" src="http://pic1.zhimg.com/70/v2-671cd560f83b76ed88ee0917e269d4ec_b.jpg" alt=""></p>
      <p>长征火箭家族部分主要成员 （图片来源：GW_Simulations）</p>
      <p>在 2015 年之前，长征系列火箭的主力是长征二号（2C/2D/2F）、长征三号（3A/3B/3C）和长征四号（4B/4C）的多个型号。可是随着中国航天的快速发展，这些火箭开始逐渐“力不从心”，其中最重要的问题就是<strong>运力不足</strong>。</p>
      <p>例如，在长征五号之前，我们近地轨道的最大运力是长征二号 F 载人航天专用火箭的 8.6 吨，高轨的地球同步转移轨道的最大运力是长征三号 B/E 的 5.5 吨[2]，更远的地月转移轨道的最大运力也是长征三号 B/E 运送嫦娥三 / 四号任务时的 3.8 吨级别[3]。</p>
      <p><strong>这意味着，更重、更大、更复杂的航天发射任务根本没法由这些火箭完成。</strong>例如，我国规划中的天宫空间站几个核心舱段每个重量将在 20 吨级，这远远超过了长征二号 F 火箭的运力；我国全新超大型卫星平台东方红五号总重量最多可以达到 9 吨级[5]，且它需要被送到距离地面 36000 千米的轨道，这大幅超过了长征三号 B/E 火箭的能力；我国嫦娥工程下一步采样返回任务嫦娥五号重量也将远超嫦娥三 / 四号，更何况还有规划中的火星探测等深空探测任务。</p>
      <p><strong>中国有句很经典的俗语：“没有金刚钻，别揽瓷器活”。中国这些“重量级”航天任务，都亟需一枚通用化、系列化、组合化的大型运载火箭。这，就是长征五号的使命和定位。</strong></p>
      <p><strong><img class="content-image" src="http://pic2.zhimg.com/70/v2-27319b01adcbac02406372a471dbbe7d_b.jpg" alt=""></strong></p>
      <p>长征五号转场中 （图片来源：航天科技集团）</p>
      <p><strong>长征五号的近地轨道运力达到 25 吨，同步转移轨道运力达到 14 吨，地月转移轨道达到 8 吨级，能执行多种航天发射任务，能力远远超过此前的长征火箭。</strong></p>
      <p><strong>二、造出长征五号火箭，有多难？</strong></p>
      <p>长征五号这种级别的火箭研制在世界范围内都是个极大的挑战，对中国而言，亦是如此。但作为中国航天史上具有划时代意义重要性的火箭，中国航天人必须迎难而上，为此，需要实现一系列高难度重大创新。</p>
      <p><strong>1.新火箭推进剂</strong></p>
      <p>传统的长征家族火箭，包括长征二、三、四号火箭都使用<strong>四氧化二氮 / 偏二甲肼推进剂组合</strong>，它们毒性大、发射准备周期长、价格昂贵、比冲偏低。比冲是衡量单位质量推进剂产生冲量的指标，一般来说，这个数据越大意味着火箭推进能力越强。相比较而言，液氧煤油、液氧液氢推进剂更优，也是世界主流大型火箭的选择。</p>
      <p>因而，长征五号一大变化是它的核心推进剂是由液氧煤油（助推器）和液氧液氢（核心芯一级、二级）组合使用。由于液氧液氢的稳定储存温度极低，分别为零下 183 和零下 253 摄氏度，长征五号也因而得名为<strong>“冰箭”</strong>。</p>
      <p><strong>2.新火箭发动机</strong></p>
      <p>更新了推进剂，就意味着发动机也要更新。而一枚火箭发动机要同时做到推力大、爆发力强、材料耐热也耐冷（从极低温到数千摄氏度的燃烧温度）、结构强、控制精细、稳定性强、质量轻等多个优点，谈何容易？</p>
      <p><strong>这也是发动机被叫做“火箭心脏”的原因，它的研发难度直接导致全世界能做出大型火箭的国家屈指可数。</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-f2b5928f3924d3d0fe59c4376f9c3c81_b.jpg" alt=""></p>
      <p>展览中的 YF-100K 发动机 （开源图片）</p>
      <p>而为了长征五号，需要同时研发出 YF-77（液氧液氢推进剂，用于核心级）、YF-100（液氧煤油推进剂，用于助推器）和 YF-75D（液氧液氢推进剂，用于二级）三型发动机，难度可想而知。</p>
      <p><strong>3.新火箭上面级</strong></p>
      <p><strong>长征五号定位为一种多用途系列火箭</strong>，在执行高轨和深空探测任务时，还需要携带第三级、或者又可以叫做上面级，它类似太空摆渡车的效果。为长征五号配套的上面级是远征二号。</p>
      <p>在航天领域，一箭 N 星“撒土豆”并不稀奇，因为重量仅几十克的皮卫星也叫卫星，但如果一次性发射多个大质量卫星进入不同轨道则非常复杂，对上面级的要求极高。例如，北斗建设过程中，就数次依靠远征一号实现一箭双星任务，节省发射次数。而<strong>远征二号实现了中国航天上面级的新一个重大突破，</strong>首次的双发动机设计也让它拥有了极强的机动变轨能力，比远征一号更强，能够助力航天器进入更远、更高、更复杂的轨道。</p>
      <p><strong>4.新壳体、新结构、新模块化组合</strong></p>
      <p>航天领域有个著名但又不失真的“笑话”——“马屁股决定了运载火箭的运力”，大意是：当初的铁轨设计参照了马屁股并排时的宽度，铁轨宽度决定了车厢设计宽度，车厢设计宽度决定了隧道设计宽度，隧道设计宽度决定了最大允许通过火箭箭体直径，火箭尺寸自然决定了最后的火箭运力。</p>
      <p>最终的结果是，此前主力长征火箭的最大壳体直径一般为 3.35 米，再宽就无法运到三大发射中心（酒泉、太原和西昌）。</p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-d4be52a37e8979b26027e4054fdd895d_b.jpg" alt=""></p>
      <p>大国工匠：高凤林，图源：CCTV</p>
      <p>而<strong>为了实现运力提升的需求，长征五号要求做到 5 米直径的箭体</strong>，第一级外还捆绑了 4 个 3.35 米的助推器，总质量飙升到了 869 吨级别，远超长征三号 B 系列的 426-459 吨级别[2]，它成了名副其实的<strong>“胖五”</strong>，这意味着崭新的壳体和整体结构设计方案。关于它的难度，推荐读者们观看著名纪录片《大国工匠》，第一集就讲述了为火箭发动机和大型壳体做焊接的大国工匠高凤林工程师的故事。</p>
      <p>此外，<strong>长征五号还实现了大型火箭的模块化设计理念</strong>，火箭级数、是否携带上面级、助推器捆绑方案等都可以按照发射需求变化，从而衍生出一个适合多种任务的长五家族。</p>
      <p><strong>5.新配套发射场、火箭运输船、生产基地</strong></p>
      <p>但显然，长征五号已经无法继续使用传统的三大火箭发射场，需要建设新的火箭发射场，这就是<strong>位于海南的文昌火箭发射基地。</strong>实际上，它还有另外两个重大好处：周边都是大洋，火箭残骸不会造成任何损失；纬度更低，能更大程度借助地球自转的力量，减少推进剂消耗、提升运力。</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-325785b2dd6bf3136168a2e792754c0e_b.jpg" alt=""></p>
      <p>远望 21 和 22 航天运输船 （图片来源：央广网和中国军网）</p>
      <p>为了将长征五号从海路运往文昌，我国还先后服役了两艘远望 21/22 航天运输船；为将组装好的火箭转场至发射架，还需要建造大型特种火箭运输平台；长征五号的生产与组装都在天津的滨海新区完成（天津航天长征火箭制造有限公司），这里也将成为中国未来火箭生产体系的灵魂。</p>
      <p><strong>这些只是长五相关的一部分，但已然可以想象每一点背后都有无数科研人员常年攻克难关，也需要国家强大的人力物力资源、科研和工程技术实力作为后盾，缺一不可。</strong></p>
      <p><strong>三、成功，从来不是那么容易</strong></p>
      <p>2016 年 11 月 3 日，长征五号遥一火箭成功首飞，举国欢腾，对于拥有如此多技术更新的大型火箭而言，着实不易。横向比较，同等级别的美国德尔塔 4- 重型、俄罗斯质子 M、欧洲的阿里安 5 型火箭，都在试射期间出现过事故。</p>
      <p>然而，2017 年 7 月 2 日，长征五号遥二火箭发射任务在飞行至 346 秒时突发故障。根据分析仿真计算及地面试验结果，故障原因为芯一级液氢液氧发动机一分机涡轮排气装置在复杂力热环境下，局部结构发生异常，发动机推力瞬时大幅下降，致使发射任务失利[4]。</p>
      <p>事后，中国航天开启了异常艰辛的“归零”工作，复现故障。经过反复排查，最终发现了这个原因。随后，改进后的芯一级液氢液氧发动机完成多次地面热试车考核，验证了改进措施的有效性[4]，才有了今天的长征五号遥三任务。</p>
      <p>成功从来不是那么随随便便，“胖五”的归来之旅，已经经历了 900 多天的痛苦煎熬。这副重担，不仅压在火箭研发团队的肩上，更压在全体中国航天人的肩上。</p>
      <p><strong>四、胖五归来，中国航天新时代进程中</strong></p>
      <p><strong>“胖五”成功归来，意味着一系列对中国航天有着深远意义的大型任务可以开始实施。</strong></p>
      <p>本次发射的实践二十号任务，是我国首次应用的东方红五号卫星平台。这个平台是我国纯自主设计研发的新一代大型桁架式卫星平台，全平台最大功率最高可达 30 千瓦，最大质量达到 9 吨。由于使用了等离子电推进技术，设计寿命可长达 15 年，大大提高了我国超大型卫星研究水平，是我国未来 20 年内的核心卫星平台之一，能使用在通信、遥感等多种卫星应用领域[5]。实践二十因而成为世界最重最强的高通量通信卫星之一，太阳能帆板全部展开后超过 40 米宽，超过普通客机翼展，通信能力远超中国此前任何一颗通信卫星。</p>
      <p><img class="content-image" src="http://pic3.zhimg.com/70/v2-dd21ecb9274ab807daa8a18e5836fba2_b.jpg" alt=""></p>
      <p>中国火星探测任务（图片来源：国家航天局）</p>
      <p>2020 年 7 月前后，人类迎来又一次探测火星窗口，中国首个独立自主的火星探测任务即将出发，目标是在一次任务中完成火星“绕、落、巡”的壮举，长征五号就是托举它奔向火星的火箭。</p>
      <p>随后，我国将正式开始嫦娥探月工程“绕、落、回”三步走计划的最后一步“回”，嫦娥五号将搭乘长征五号择机发射，着陆月球并带回月球土壤样本，这也是阿波罗登月时代结束 50 年之际人类再次“触碰”月球。</p>
      <p>在 11 艘神舟飞船、1 艘天舟飞船、2 艘天宫空间实验室任务结束后，我国载人航天事业也将迎来新高度，全面建设 100 吨级别的天宫空间站，实现多人在轨长时间驻留太空。在同样的轨道也将有一个大型巡天望远镜伴飞，成为中国的“哈勃太空望远镜”。长征五号（B 型）火箭将成为整体建设过程中最核心的运载器具。</p>
      <p><strong>中国航天的新时代已经到来。</strong>今年是中华人民共和国成立 70 周年，中国航天也已经走过 63 年。回头看，它的每一幕依然激动人心。从东方红一号到长征五号，中国航天辉煌成就的背后，不仅有伟大的 23 位“两弹一星”元勋，更有一位又一位继承、坚持、发扬着“两弹一星”精神的平凡航天人。</p>
      <p>向他们致敬！！</p>
      <p><strong>相关参考：</strong></p>
      <p>【1】航天科技集团：<a href="http://www.spacechina.com/n25/n148/n2020942/c2614681/content.html">http://www.spacechina.com/n25/n148/n2020942/c2614681/content.html</a></p>
      <p>【2】长城工业集团：<a href="http://cn.cgwic.com/Launchservice/LM3B.html">http://cn.cgwic.com/Launchservice/LM3B.html</a></p>
      <p>【3】人民网：<a href="http://scitech.people.com.cn/change-3/">http://scitech.people.com.cn/change-3/</a></p>
      <p>【4】运载火箭技术研究院：<a href="http://www.calt.com/n482/n742/c11650/content.html">http://www.calt.com/n482/n742/c11650/content.html</a></p>
      <p>【5】空间技术研究院：<a href="http://www.cast.cn/Item/Show.asp?m=1&amp;d=2883">http://www.cast.cn/Item/Show.asp?m=1&amp;d=2883</a></p>
      <p><strong>出品：科普中国</strong></p>
      <p><strong>制作：太空精酿</strong></p>
      <p><strong>监制：中国科学院计算机网络信息中心</strong></p>
      <p><img class="content-image" src="http://pic2.zhimg.com/70/v2-d8c775ad620b5aa5fc4dd0a324646549_b.jpg" alt=""></p>
      <p><a href="https://www.zhihu.com/lives/784051338198671360">世界火箭家族一览</a></p>
      </div>`
    }
  ]
}

Mock.mock(`${domain}/news`, 'get', newsList)
