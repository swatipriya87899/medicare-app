import React, { useState } from 'react';
import {
    GiftedChat,
    Bubble,
} from 'react-native-gifted-chat';
import Bot_Avatar from './../assests/images/bot.png';
import User_Avatar from './../assests/images/user.png';
import Modal from 'react-native-modal';
import {
    Text,
    View, Image, TouchableOpacity
} from 'react-native';
import { useSelector , useDispatch} from 'react-redux';
import config from './../../config';
import Icon from 'react-native-vector-icons/Entypo';
import { openBot } from '../redux/action';

//Customizing Chat Bubble
const renderBubble = (props) => {
    
    return (
        <Bubble
            {...props}
            textStyle={{
                right: { color: '#064635' },
                left: { color: '#FFFFFF' },
            }}
            wrapperStyle={{
                left: { backgroundColor: '#064635' },
                right: { backgroundColor: '#F9D026' },
            }}></Bubble>
    );
};

const Chatbot = (props) => {

    const dispatch = useDispatch();

    const {botVisible} = useSelector((store)=> store.datas)

   

    //Creating object for Bot
    const Bot = {
        _id: 4,
        name: 'Doctor',
        avatar: Bot_Avatar,
    };


    //State for storing the message
    const [messages, setMessages] = useState([
        {
            _id: 3,
            text: `How can I help You ?`,
            createdAt: new Date(),
            user: Bot,
        },
        {
            _id: 2,
            text: `Welcome to the Medicare App!!`,
            createdAt: new Date(),
            user: Bot,
        },
        {
            _id: 1,
            text: `Hi!`,
            createdAt: new Date(),
            user: Bot,
        },
    ]);

    const onSend = async (message) => {

        setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, message);
        });

        let msg = message[0].text;

        console.log(message);
        console.log(msg);

        fetch(`${config.Base_API_URL}/chatbot/query`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'message': msg
            })
        }).then((response) => response.json()).then((result) => {
            console.log('result', result);
            handleGoogleResponse(result);
        }).catch((error) => {
            console.log(error);
        })

    };

    const handleGoogleResponse = (result) => {
        let text = result.message.fulfillmentMessages[0].text.text[0];
        sendBotResponse(text);
    };

    const sendBotResponse = (text) => {
        let msg = {
            _id: messages.length + 1,
            text,
            createdAt: new Date(),
            user: Bot,
        };
        setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, [msg]);
        });
    };

    return (
        <Modal
            isVisible={botVisible}
        >
            {/* Have To Add Header Here */}
           <View style={{flex:0.08, backgroundColor:'#F9D026', borderTopRightRadius: 18, borderTopLeftRadius:18, alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginLeft: 20}}>
            <View style={{width:30, height:30}}><Image source={require('./../assests/images/bot.png')} style={{width:'100%', height:'100%'}}></Image></View>
            <Text style={{fontSize: 16, fontWeight:'900', color:"#064635", marginLeft: 10}}>Online</Text>
            </View>
            <TouchableOpacity onPress={()=>dispatch(openBot(false))}>
            <Icon name="chevron-thin-down" size={25} color="#064635" style={{marginRight:20}}/>
            </TouchableOpacity>
           </View>
            <View
                style={{
                    flex: 0.8
                }}
            >
                <GiftedChat
                    listViewProps={{
                        style: {
                            backgroundColor: "#DDFFBC"
                        }
                    }}
                    showUserAvatar={true}
                    placeholder='Chat with me to get best Medical Assistance!'
                    renderBubble={(props) => renderBubble(props)}
                    messages={messages}
                    onSend={(messages) => onSend(messages)}
                    user={{
                        _id: 1,
                        avatar: User_Avatar,
                    }}
                    textInputStyle={
                        {
                            color: '#064635',
                        }
                    }
                />
            </View>
        </Modal>
    )


}

export default Chatbot;