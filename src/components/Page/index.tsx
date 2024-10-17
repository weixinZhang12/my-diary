import { IonContent, IonPage } from '@ionic/react';
import './index.css';
import { Button, NavBar } from 'react-vant';
import { ReactNode } from 'react';
export interface Slot {
  children: ReactNode
}
const Page: React.FC<Slot> = ({ children }) => {
  // BUG 
  return (
    <IonPage>
      <IonContent>
        <div className="componments-page">
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
