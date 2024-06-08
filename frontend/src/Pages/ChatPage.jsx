import React, {useEffect, useState} from 'react';
import axios from 'axios';
const ChatPage = () => {
    const [messages, setMessages] = useState('');
    const fetchChats =async () =>{
    const {data} = await axios.get('api/chats');
    console.log(data);
   setMessages(data);
    }

    useEffect(() => {
        fetchChats() ;
    }, []);

    return (
        <div>
            {messages.length > 0 ? (
                messages.map((item, index) => (
                    <div key={index}>{item.chatName}</div>
                ))
            ) : (
                <p>No chats available</p>
            )}
        </div>
    );
};

export default ChatPage;