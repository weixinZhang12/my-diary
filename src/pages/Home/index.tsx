import styles from './index.module.scss';
import { Card, Cell, Empty, Flex, FloatingBall, NavBar, Popup, Typography } from 'react-vant';
import Page from '../../components/Page';
import { CSSProperties, useEffect, useState } from 'react';
import data from '../../utils/date';
import { AddO, BrushO, Chat, PhotoO, SettingO, ShopO } from '@react-vant/icons';
import Menu from '../../assets/images/Menu';
import './index.scss'
import { lang } from '../../lang/langManger';
const css: CSSProperties = {
  background: ''
}

interface LeftPropsInter {
  isShow: boolean,
  setShow: () => void

}

interface LeftDomInter {
  setShow: () => void
}
function LeftDom(props: LeftDomInter) {
  // const date=useRef(new Date())
  return (
    <div className={styles['left-nav-container']}>
      <Menu onClick={props.setShow} />
      <button style={{}}>{data.getNowDate()}</button>
    </div>
  )
}
// 左侧边栏
function LeftPopup(props: LeftPropsInter) {
  const [isShow, setIsShow] = useState(props.isShow)
  // When first loaded,set show state to props,isShow
  // 当首次家在时自动执行，设置状态
  useEffect(() => {
    setIsShow(props.isShow)
    console.log('popup', isShow);

  }, [props.isShow])
  return (
    <Popup visible={isShow} onClose={() => props.setShow()} position='left'>
      <div className={styles['left-popur-ccontainer']}>
        <Cell.Group title={'13145314223'} card>
          <Cell title={lang.home_left_img_text} icon={<PhotoO />} />
          <Cell title={lang.home_left_theme_text} icon={<BrushO />} />
        </Cell.Group>
        <Cell.Group title={''} card className={styles['popup-bottom-cell-group']}>
          <Cell title={lang.home_left_setting_text} icon={<SettingO />} />
        </Cell.Group>
      </div>
    </Popup>
  )
}
// 内容区域
function Content() {
  const [cardList] = useState(
    [
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
      {
        content: 'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。',

      },
    ]
  )
  return <div className="home-content-container">
    {/* 悬浮窗 */}
    <FloatingBall offset={{ right: 30, bottom: 70 }} draggable={false} adsorb={false}>
      <Flex align='center' justify='center' className='home-content-container-floating-container'>
        <AddO />
      </Flex>
    </FloatingBall>
    {/* 笔记卡片列表 */}
    {/* 当笔记卡片数量为零时自动显示空状态 */}
    {cardList.length === 0 ? <Empty description={lang.home_content_enpty_text} />
      : <div className="home-content-container-card-container">
        
        {cardList.map((item)=>{
         return <Card round className='home-content-container-card-container-card'>
          <Card.Body>
            <Typography.Text ellipsis={4}>{item.content}</Typography.Text>
          </Card.Body>
          <Card.Footer>xxx</Card.Footer>
        </Card>
        })}
      </div>}
  </div>
}
// 主页面
const Home: React.FC = () => {
  const [isShowPopup, setIsShowPopup] = useState(false)
  // BUG 控制侧边栏是否显示
  function setShow() {
    setIsShowPopup(!isShowPopup)
  }
  return (
    // 页面
    <Page>
        {/* 导航栏 */}
      <NavBar leftText={<LeftDom setShow={setShow} />} />
      {/* 侧边栏 */}
      <LeftPopup isShow={isShowPopup} setShow={setShow} />
      {/* 内容区域 */}
      <Content />
    </Page>
  );
};

export default Home;
