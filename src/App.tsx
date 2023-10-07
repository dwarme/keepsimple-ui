
import './App.css';
import './lib/css/theme/theme.css'
import './lib/css/theme/typography.css'
import './lib/css/theme/form.css'
import './lib/css/theme/animation.css'
import './lib/css/theme/nav/localnav.css'
import './lib/css/theme/footer.css'
import './lib/css/template/grid-tile.css'
import './lib/css/theme/modal.css'
import Tiles from './lib/components/template/Grid/Tiles/Tiles';
import LocalNav from './lib/components/template/NavBar/LocalNav/LocalNav';
import Footer from './lib/components/template/Footer/Footer';
import Gallery from './lib/components/template/Gallery/Gallery';
import Modal from './lib/components/overlay/Modal/Modal';

import Primary from './lib/components/ecommerce/selection/variant-color/primary/Primary'
import Summary from './lib/components/ecommerce/summary/Summary';
import ProductHeader from './lib/components/ecommerce/product-header/ProductHeader';
import ProductSelection from './lib/components/ecommerce/selection/ProductSelection';
import GalleryZoomable from './lib/components/ecommerce/gellery/zoomable/GalleryZoomable';

function App() {
  return (
    <>
      <LocalNav
        title={{
          title: 'Keepsimple UI',
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
              title: 'Docs',
              link: '/documentation',
            },
          ],
          actions: [
            {
              title: 'Contact Us',
              link: '/contact',
            }
          ]
        }}
      />
      <main>
        <Tiles>
          <Tiles.Full></Tiles.Full>
          <Tiles.Half 
            button={{
              icon: 'arrow'
            }}
          ></Tiles.Half>
          <Tiles.Half></Tiles.Half>
          <Tiles.Full></Tiles.Full>
          <Tiles.Half></Tiles.Half>

          <Tiles.Half></Tiles.Half>

        </Tiles>
        <Gallery />

      </main>
      
      <Modal toggleId='modal-toggle-047274' open={true}>
        <div className="modal-copy">
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </Modal>

      <div className='large-4'>
            <ProductHeader />
            <ProductSelection />
            <Summary />
      </div>

      <div className='width-full'>
        <GalleryZoomable />
      </div>

      <button id="modal-toggle-047274" className='button'>Open Modal</button>
      
      <Footer
        copyright='Copyright © 2023 Keepsimple UI. All rights reserved.'
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