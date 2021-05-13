import "./App.css";

function App() {
  return (
    <div className="cv">
      {/* 个人信息 */}
      <div>
        <h2>xxxxx</h2>
        <div>138-8048-0630 | 1847016090@qq.com</div>
        <div>github.com</div>
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
        <div>xxxx项目 - xxx开发
        <ul>
          <li>
            项目背景: xxxxxx
          </li>
          <li>
            工作: 担任xxxxx, 负责什么
            <ul>
              <li>
                参与xxx开发，解决xxx问题
              </li>
              <li>
                首屏加载20ms,提升20%
              </li>
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
            xxxxx
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
