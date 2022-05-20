import { ChartList } from './components/chat-list/chat-list';
import { AsideHeader } from './components/aside-header/aside-header';
import PersistentDrawerRight from './components/persistent-drawer/persistent-drawer';


import './App.scss';

const App = () => {
  
  return (
    <div className="App">
      <aside className='aside-bar'>
        <AsideHeader/>
        <ChartList/>
      </aside>
      <div className='content-box'>
        <PersistentDrawerRight/>
      </div>
    </div>
  );
}

export default App;
