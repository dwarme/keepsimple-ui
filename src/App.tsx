
import './App.css';
import './css/theme/theme.css'
import './css/theme/typography.css'
import './css/theme/animation.css'
import './css/theme/nav/localnav.css'
import './css/theme/footer.css'
import './css/template/grid-tile.css'
import './css/theme/modal.css'
import Tiles from './components/template/Grid/Tiles/Tiles';
import LocalNav from './components/template/NavBar/LocalNav/LocalNav';
import Footer from './components/template/Footer/Footer';
import Gallery from './components/template/Gallery/Gallery';
import Modal from './components/overlay/Modal/Modal';

function App() {
  return (
    <>
      <LocalNav
        title={{
          title: 'Daouda Warme',
          link: '/'
        }}

        menu={{
          items: [

            {
              title: 'Overview',
              link: '/',
              active: true
            },
            {
              title: 'Works',
              link: '/works',
            },
            {
              title: 'Resume',
              link: '/resume'
            },
          ],
          actions: [
            {
              title: 'Contact',
              link: '/contact',
            }
          ]
        }}
      />
      <main>
        <Tiles>
          <Tiles.Full></Tiles.Full>
          <Tiles.Half></Tiles.Half>
          <Tiles.Half></Tiles.Half>
          <Tiles.Full></Tiles.Full>
          <Tiles.Half></Tiles.Half>

          <Tiles.Half></Tiles.Half>

        </Tiles>
        <Gallery />

      </main>
      
      <Modal toggleId='modal-toggle-047274' open={true}>
        <div className="modal-copy">
          <p>From your heart rate to your menstrual cycle, apps and devices for your health can give you insight into some of your most personal details. With the Health app, you’re in charge of what information you’d like to include, what not to, and who has access to&nbsp;it.</p>
          <p>When you do want to securely share your health data from the Health app with your doctors, they’ll see the data you shared in a dashboard in the provider’s health records&nbsp;system.</p>
          <p>All of your data is encrypted and only accessible with your passcode, Touch&nbsp;ID, or Face&nbsp;ID. So however you use the Health app, you’re always in control of your&nbsp;data.</p>
        </div>
      </Modal>

      <button id="modal-toggle-047274" className='button'>Open Modal</button>
      
      <Footer
        copyright='Copyright © 2023 Daouda Warme. All rights reserved.'
        legalLinks={[
          {
            title: 'Privacy Policy',
            link: '/legal/privacy'
          },
          {
            title: 'Terms of Use',
            link: '/legal/terms'
          }
        ]}
        localeLink={{
          link: '/choose-language',
          title: 'English',
          onClick: () => { },
        }}
      />
    </>
  );
}

export default App;