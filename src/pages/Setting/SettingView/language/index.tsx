import { useState } from 'react';
import './index.scss'
import { NavBar } from 'react-vant';
import Page from '../../../../components/Page';

const Language: React.FC = () => {
  const [isShowPopup, setIsShowPopup] = useState(false)
  
  return (
    // 页面
    <Page>
      <NavBar title={'语言'}/>
    </Page>
  );
};

export default Language;
