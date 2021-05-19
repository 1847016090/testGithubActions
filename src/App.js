import "./App.css";
import "./Common.css";
let show = false;
const showInfo = text => {
  return show ? text : [...new Array(text.length + 1)].join("x");
};

function App() {
  return (
    <div className="cv">
      {/* 个人信息 */}
      <div className="info">
        <div className="avatar _m_r_2">
          <img src="xx" alt="" />
        </div>
        <div className="_w_6 _flex _v _between">
          <h1>{showInfo("叶康")}</h1>
          <div className="_flex _between">
            <div className="_w_2">
              <div>性　　别：男</div>
              <div>民　　族：汉</div>
              <div>学　　历：本科</div>
              <div>英语等级：CET-4</div>
              <div>毕业院校：{showInfo("西华大学")}</div>
            </div>
            <div className="_w_3">
              <div>年　　龄：24</div>
              <div>专　　业：软件工程</div>
              <div>联系电话：{showInfo("138-8048-0630")}</div>
              <div>现居地址：{showInfo("成都市天府新区万安镇")}</div>
              <div>电子邮箱：{showInfo("1847016090@qq.com")}</div>
            </div>
          </div>
        </div>
      </div>
      {/* 教育经历 */}
      <div>
        <h3 class="header-title">教育经历</h3>
        <div className="_flex _between">
          <div>{showInfo("西华大学")} | 软件工程专业</div>
          <div>2015年9月 - 2019年7月</div>
        </div>
      </div>
      {/* 工作经历 */}
      <div>
        <h3 class="header-title">工作经历</h3>
        <div className="_flex _between">
          <div>{showInfo("成都聚思力技术股份有限公司")} | 前端开发工程师</div>
          <div>{showInfo('2018年10月 - 至今')}</div>
        </div>
      </div>
      {/* 项目经历 */}
      <div>
        <h3 className="header-title">项目经历</h3>
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
        <h3 className="header-title">专业技能</h3>
        <ul>
          <li>熟悉HTML、CSS、JavaScript，ES6等前端技术</li>
          <li>
            熟悉React框架以及实现原理，了解Vue框架；熟悉 AntD，Elemenet-ui 等常用UI库的使用
          </li>
          <li>熟悉Redux，React-Reudx，React-Router全家桶以及实现原理</li>
          <li>熟悉git版本控制工具、npm包管理器</li>
          <li>
            熟悉Webpack，Esbuild，Vite，Gulp，Eslint，Prettier等工程化构建工具
          </li>
          <li>熟悉Dva, 了解 Tarojs 等等脚手架</li>
          <li>了解Express， Koa框架，能使用其实现简单的服务器</li>
          <li>了解微信小程序开发</li>
          <li>熟练阅读和查阅计算机相关英文文档，并且有良好的编程习惯。</li>
        </ul>
      </div>
      {/* 自我评价 */}
      <div>
        <h3 className="header-title">自我评价</h3>
        <div>
          热爱学习，自我学习能力很强，能够通过网络学习到前沿的IT技术，最新的知识，同时对自己想做的事很认真。
          专业知识扎实，有积极的工作态度，能够独立工作，又有团队精神。
          具有良好的文化素质，脾气很好，能够和同事和谐相处，在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，并且稳定地进步自己的工作能力。
        </div>
      </div>
      {/* 兴趣爱好 */}
      <div>
        <h3 className="header-title">兴趣爱好</h3>
        <div>
          热爱学习，喜欢看新闻，文学，小说，心理学，杂志等各种书籍，只要对自己有益的书籍都有涉及，自学能力也很强，能够通过阅读有关IT的英文网站来学习到前沿的IT技术，最新的知识
          热爱运动，身体健康，喜欢打篮球，曾是是我们计算机篮球队的一员, 喜欢唱歌
        </div>
      </div>
    </div>
  );
}

export default App;
