import {useState, useEffect} from 'react';

import MessageList from './components/message-list/message-list.component.jsx';
import MessageForm from './components/message-form/message-form.component';

import './App.scss';

const App = () => {
  const [messageList, setMessageList] = useState([]);

	const [messageText, setMessageText] = useState('');

  const handleChange = (event) => {
		setMessageText(event.target.value);
	}

  useEffect(() => {
    let lastMessage = messageList[messageList.length -1];
    if (messageList.length !== 0) {
      if(lastMessage.author === 'user') {
        setTimeout(() => {
          setMessageList([...messageList, {author: 'robot', id: Date.now(), text: 'Добро пожаловать!'}]);
        }, 1500);
      } return
    }
  });

	const submitHandle = (event) => {
		event.preventDefault();
		setMessageList([...messageList, {author: 'user', id: Date.now(), text: messageText}]);
    document.querySelector('.send-form-input').value = '';
	}

  return (
    <div className="App">
      <MessageList messageList={messageList}/>
      <MessageForm submitHandle={submitHandle} handleChange={handleChange}/>
    </div>
  );
}

export default App;
