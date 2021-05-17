import "./App.css";

function App() {
  return (
    <div className="cv">
      {/* 个人信息 */}
      <div>
        <h2>xxxxx</h2>
        <div>138-8048-0630 | 1847016090@qq.com</div>
      </div>
      {/* 教育经历 */}
      <div>
        <h4 class="header-title">教育经历</h4>
        <div>西华大学 | 软件工程专业 2015年9月 - 2019年7月</div>
      </div>
      {/* 工作经历 */}
      <div>
        <h4 class="header-title">工作经历</h4>
        <div>成都xxx技术股份有限公司 - 前端开发工程师 2018年10月 - 至今</div>
        <ul>
          <li>业务开发: xxxxxx</li>
          <li>基础建设: xxxxxx</li>
          <li>数据驱动: xxxxxx</li>
        </ul>
      </div>
      {/* 项目经历 */}
      <div>
        <h4 className="header-title">项目经历</h4>
        <div>
          xxxx项目 - xxx开发
          <ul>
            <li>项目背景: xxxxxx</li>
            <li>
              工作: 担任xxxxx, 负责什么
              <ul>
                <li>参与xxx开发，解决xxx问题</li>
                <li>首屏加载20ms,提升20%</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* 专业技能 */}
      <div>
        <h4 className="header-title">专业技能</h4>
        <ul>
          <li>
            掌握vueJS、React等主流MVC、MVVM框架；掌握Element-ui，Mint-ui，MUI等常用UI库的使用
          </li>
          <li>熟练使用HTML5和CSS3，实现应用一站式跨屏（PC端与移动端）开发；</li>
          <li>
            熟练使用HTML、CSS、JavaScript，ES6等前端技术，完成网页静态布局，开发兼容主流浏览器的页面，以及实现页面的交互，提升用户体验；
          </li>
          <li>
            掌握Bootstrap，jQuery框架，能快速布局响应式页面以适应不同设备，实现页面的交互效果，提高用户体验；
          </li>
          <li>
            熟悉OOP编程模式，熟练使用webStorm、Hbuilder、微信web开发者工具等开发环境，掌握微信小程序开发；
          </li>
          <li>
            熟练使用git版本控制工具，进行代码管理，实现敏捷开发；熟练使用npm、webpack等常用工具；
          </li>
          <li>掌握Nodejs，express框架，能够利用它们搭建简单的服务器；</li>
          <li>掌握第三方框架（百度图片上传插件、腾讯云存储）等；</li>
          <li>熟练阅读和查阅计算机相关英文文档，并且有良好的编程习惯。</li>
        </ul>
      </div>
      {/* 自我评价 */}
      <div>
        <h4 className="header-title">自我评价</h4>
        <div>
          热爱学习，自我学习能力很强，能够通过网络学习到前沿的IT技术，最新的知识，同时对自己想做的事很认真。
          专业知识扎实，有积极的工作态度，能够独立工作，又有团队精神。
          具有良好的文化素质，脾气很好，能够和同事和谐相处，在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，并且稳定地进步自己的工作能力。
        </div>
      </div>
      {/* 兴趣爱好 */}
      <div>
        <h4 className="header-title">兴趣爱好</h4>
        <div>
          热爱学习，喜欢看新闻，文学，小说，心理学，杂志等各种书籍，只要对自己有益的书籍都有涉及，自学能力也很强，能够通过阅读有关IT的英文网站来学习到前沿的IT技术，最新的知识
          热爱运动，身体健康，喜欢打篮球，曾是是我们计算机篮球队的一员, 喜欢唱歌
        </div>
      </div>
    </div>
  );
}

export default App;
