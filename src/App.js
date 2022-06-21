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
          <h2>{showInfo("叶康 | 求职意向(前端开发工程师)")}</h2>
          <div className="_flex _between">
            <div className="_w_2">
              <div>性　　别：男</div>
              <div>民　　族：汉</div>
              <div>学　　历：本科</div>
              <div>英语等级：CET-4</div>
              <div>毕业院校：{showInfo("西华大学")}</div>
            </div>
            <div className="_w_3">
              <div>年　　龄：25</div>
              <div>专　　业：软件工程</div>
              <div>联系电话：{showInfo("188-4834-3760")}</div>
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
          <div>{showInfo("西华大学")} | 计算机学院软件工程专业</div>
          <div>2015年9月 - 2019年7月</div>
        </div>
      </div>
      {/* 工作经历 */}
      <div>
        <h3 class="header-title">工作经历</h3>
        <div className="_flex _between _m_t_1">
          <div>{showInfo("成都聚思力技术股份有限公司")} | 前端开发工程师</div>
          <div>{showInfo("2018年10月 - 2021年10月")}</div>
        </div>
        <div className="_flex _between _m_t_1">
          <div>{showInfo("成都鱼泡网科技有限公司")} | 前端开发工程师</div>
          <div>{showInfo("2021年10月 - 至今")}</div>
        </div>
      </div>
      {/* 专业技能 */}
      <div>
        <h3 className="header-title">专业技能</h3>
        <ul>
          <li>熟悉HTML、CSS、JavaScript、ES6、Typescript等前端技术</li>
          <li>熟悉React框架，以及周边生态Redux，React-Redux，React-Router</li>
          <li>熟悉常用UI库AntD的使用</li>
          <li>熟悉前端工程化和性能优化，能使用Webpack从零到一搭建前端项目</li>
          <li>熟悉git版本控制工具、npm包管理器</li>
          <li>熟悉Tarojs跨端框架</li>
          <li>熟悉常用的设计模式，数据结构以及算法</li>
          <li>熟练阅读和查阅计算机相关英文文档，并且有良好的编程习惯。</li>
        </ul>
      </div>
      {/* 项目经历 */}
      <div>
        <h3 className="header-title">项目经历</h3>
        <div>
          <div className="_bold _m_b_1">
            2021年10月 - 至今：鱼泡网小程序重构
          </div>
          <div>
            鱼泡网是一个建筑工程招工找活平台，4000万的注册工友，每天实时发布附近工地真实有效的工程招聘信息，方便建筑工人找老板、找项目、找工作。
          </div>
          <div>项目技术：Taro + Typescript + Scss + icestore</div>
          <div className="_bold _m_t_half _m_b_half">个人职责</div>
          <ul className="_m_b_2">
            <li>
              担任生产线核心开发，积极协调同事工作，并负责实名，企业认证接入，第三方E证通人脸识别接入，发布招工地址优化，找活名片优化等迭代开发维护
            </li>
            <li>
              优化招工，找活页面性能，降低进入页面的白屏时间，让小程序页面在低端机上面的显示速度提升一倍以上
            </li>
            <li>重构工种组件，城市组件，封装图片组件，相机组件等公用组件</li>
            {/* <li>
              推动框架从Taro2.0升级到3.0，并集成Eslint，Prettier，
              Husky等，统一代码编写规范，代码提交规范
            </li> */}
            <li>
              推动项目框架优化并集成Eslint，Prettier，
              Husky等，统一代码编写规范，代码提交规范
            </li>
            <li>
              封装History路由方法，ypStorage缓存方法；useStates，usePreventRepeatedCalls自定义Hooks方法提升了页面的性能
            </li>
            <li>
              推动前后数据结构对接规范；集成mock数据
              Rap到项目中，提高前后端协作效率
            </li>
            <li>
              日常分享：
              <a
                target="_blank"
                rel="noreferrer"
                href="https://metaverseppt-1257212764.cos-website.ap-chengdu.myqcloud.com/#slide=1"
              >
                元宇宙
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="_bold _m_b_1">
            2018年10月 - 2021年10月：STELLR 云平台
          </div>
          <div>
            {/* STELLR一个是为微软，谷歌， Office365等供应商售卖云服务的B端平台。 */}
            2019年02月-2022年03月 STELLR
            是面向欧洲，美洲地区的B端云产品销售平台，合作方包括苹果，谷歌，微软等300+供应商，和20000+下游公司，是公司营收的三大马车之一。
          </div>
          <div>项目技术：React + Redux + Dva，在其基础上集成了react-intl</div>
          <div className="_bold _m_t_half _m_b_half">{"个人职责"}</div>
          <ul>
            <li>
              担任生产线核心开发，负责用户管理后台，设备管理后台，用户协作平台等页面开发以及迭代
            </li>
            <li>讨论组件使用标准，完善组件库，以及根据标准编写组件示例</li>
            {/* <li>讨论组件使用标准，完善组件库，主导Storybook搭建展示用例并且据标准编写组件示例</li> */}
            <li>
              工作之余完成定制化翻译工具，解决项目在上线前需要手动翻译上百条数据的问题大大提高同事的工作效率。
            </li>
            <li>滚动加载使用虚拟列表极大的提高了长列表滚动的性能</li>
            <li>手写Cli工具，提供快捷下载不同项目模版代码</li>
            <li>整理Solv-Ui 组件使用用例代码块并分享给同事，提高开发效率</li>
          </ul>
        </div>
      </div>
      {/* 自我评价 */}
      <div>
        <h3 className="header-title">自我评价</h3>
        <ul>
          <li>做事认真仔细，善于沟通以及提出问题。</li>
          <li>具有良好的文化素质，脾气很好，能够和同事和谐相处</li>
          <li>工作积极，能够独立工作，又有团队精神</li>
          <li>热爱运动，喜欢篮球，唱歌，健身</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
