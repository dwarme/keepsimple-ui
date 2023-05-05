
import './App.css';
import './css/theme/theme.css'
import './css/theme/typography.css'
import './css/theme/animation.css'
import './css/theme/nav/localnav.css'
import './css/template/grid-tile.css'
import Tiles from './components/template/Grid/Tiles/Tiles';
import LocalNav from './components/template/NavBar/LocalNav/LocalNav';

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
      </main>
    </>
  );
}

export default App;
