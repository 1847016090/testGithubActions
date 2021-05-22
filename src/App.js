import "./App.css";
import "./Common.css";
import avatartImg from "./avatar.png";

let show = true;
const showInfo = text => {
  return show ? text : [...new Array(text.length + 1)].join("x");
};

function App() {
  return (
    <div className="cv">
      {/* 个人信息 */}
      <div className="info">
        <div className="avatar _m_r_2">
          <img src={avatartImg} alt="" />
        </div>
        <div className="_w_6 _flex _v _between">
          <h2>{showInfo("叶康 | 在职")}</h2>
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
          <div>{showInfo("成都xxx技术股份有限公司")} | 前端开发工程师</div>
          <div>{showInfo("2018年10月 - 至今")}</div>
        </div>
      </div>
      {/* 项目经历 */}
      <div>
        <h3 className="header-title">项目经历</h3>
        <div>
          <div className="_bold">STELLR 平台</div>
          <div>STELLR一个是对微软，谷歌, Office365等售卖云服务的B端平台。系统包含:</div>
          <div>
            用户管理，报表分析，设备管理，消息管理，埋点等。
            项目采用 Dva(基于React, Redux ， React-Router) 为脚手架，
            在其基础上集成了 immutable, eslint，react-intl, solv-uicomponent(基于antd封装)，
            solv-models(管理业务逻辑),solv-common(提供基础方法)
          </div>
          <div className="_bold">个人职责</div>
          <ul>
            <li>负责用户管理，设备管理的页面开发以及迭代</li>
            <li>讨论组件使用标准，完善组件库，以及根据标准编写组件示例</li>
            <li>开发Vendor静态页面</li>
            <li>快速编写业务deme演示给客户</li>
          </ul>
          <div className="_bold">项目难点</div>
          <ul>
            <li>使用Vue + Koa + MogonDB 完成翻译小工具，解决项目的翻译难题。</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
          </ul>
        </div>
      </div>
      {/* 专业技能 */}
      <div>
        <h3 className="header-title">专业技能</h3>
        <ul>
          <li>熟悉HTML、CSS、JavaScript，ES6等前端技术</li>
          <li>
            熟悉React框架以及实现原理，了解Vue框架；熟悉 AntD，Elemenet-ui
            等常用UI库的使用
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
        <ul>
          <li>做事认真仔细，善于沟通以及提出问题。</li>
          <li>行走的标准，总是能在和设计的沟通中提出设计不规范的地方。</li>
          <li>具有良好的文化素质，脾气很好，能够和同事和谐相处</li>
          <li>工作积极，能够独立工作，又有团队精神</li>
          <li>热爱运动，喜欢篮球，唱歌</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
