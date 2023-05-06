
import './App.css';
import './css/theme/theme.css'
import './css/theme/typography.css'
import './css/theme/animation.css'
import './css/theme/nav/localnav.css'
import './css/theme/footer.css'
import './css/template/grid-tile.css'
import Tiles from './components/template/Grid/Tiles/Tiles';
import LocalNav from './components/template/NavBar/LocalNav/LocalNav';
import Footer from './components/template/Footer/Footer';
import Gallery from './components/template/Gallery/Gallery';

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