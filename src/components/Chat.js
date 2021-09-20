import './Chat.css'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GiftIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import ChatHeader from './ChatHeader'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selecctChannelId, selectChannelName } from '../features/app/appSlice'
import { selectUser } from '../features/user/userSlice'
import { useState } from 'react'
import db from '../firebase'
import firebase from 'firebase'
import { useEffect } from 'react'


function Chat() {
    const channelId=useSelector(selecctChannelId);
    const user= useSelector(selectUser)
    const channelName=useSelector(selectChannelName);
    const [input, setInput]=useState(' ')
    const [messages,setMessages]=useState([])



    const sendMessage=e=>{
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             message:input,
             user:user,
         })
         setInput('')
        }

    useEffect(()=>{
        if(channelId){
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map( (doc)=>doc.data())))

        }
    },[channelId])
    

    return (
        <div className='chat'>
           <ChatHeader channelName={channelName}/>
           <div className="chat__messages">
               {messages.map((message)=>(
                 <Message 
                 timestamp={message.timestamp}
                 message={message.message} 
                 user={message.user}/>


               ))}
               



           </div>
           <div className="chat__input">
               <AddCircleIcon fontSize='large'/>
               <form >
                   <input disabled={!channelId} value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="message #TestChannel" />
                   <button onClick={sendMessage} className="chat__inputButton" type='submit'>Send Message</button>
               </form>
               <div className="chat__inputIcons">
                   <CardGiftcardIcon/>
                   <GiftIcon/>
                   <EmojiEmotionsIcon/>
               </div>
           </div>
        </div>
    )
}

export default Chat
