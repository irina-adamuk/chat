import Message from './components/message/Message';
import './App.css';

function App() {
  const MessageText = 'Всем хорошего дня и замечательного настроения!'
  return (
    <div className="App">
      <Message props={MessageText}/>
    </div>
  );
}

export default App;
