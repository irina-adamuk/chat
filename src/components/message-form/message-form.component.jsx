import './message-form.module.styles.scss';

const MessageForm = ({submitHandle, handleChange}) => {
  return (
    <form className='send-form' onSubmit={submitHandle}>
  		<input onChange={handleChange} className='send-form-input' type="text" placeholder='Введите сообщение'/>
			<button className='send-form-button' type="submit">отправить</button>
		</form>
  )
}

export default MessageForm