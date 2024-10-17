import Page from '../../components/Page';
import { useState } from 'react';
import './index.scss'
import { Cell, NavBar } from 'react-vant';
import { useIonRouter } from '@ionic/react';
import { lang } from '../../lang/langManger';
import { CommentCircleO, MedalO, UserO } from '@react-vant/icons';
function Content() {
  const router = useIonRouter()
  function toLanguageView() {
    router.push('/language', 'root', 'replace')

  }
  return <div className="setting-content">
    <Cell.Group card className='setting-content-user-cell-group'>
      <Cell icon={<UserO />} title={lang.setting_userinfo}></Cell>
    </Cell.Group>
    <Cell.Group card className='setting-content-basis-cell-group'>
      <Cell icon={<MedalO />} title={lang.setting_style}></Cell>
    </Cell.Group>
    <Cell.Group card className='setting-content-other-cell-group'>
      <Cell icon={<CommentCircleO />} title={lang.setting_language} onClick={
        toLanguageView

      }></Cell>
    </Cell.Group>
  </div>
}
const Setting: React.FC = () => {
  const router = useIonRouter()

  function returnHome() {
    router.push('/home', 'root', 'replace')
  }
  return (
    // 页面
    <Page>
      <NavBar title={'设置'} onClickLeft={returnHome} />
      <Content />
    </Page>
  );
};

export default Setting;
