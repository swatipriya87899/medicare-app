import React, { useRef ,useEffect} from "react";
import { DrawerLayoutAndroid, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import User_Pic from './../assests/images/user_pic.png';
import Home_Icon from './../assests/icon/home.png';
import Login_Icon from './../assests/icon/login.png';
import { useSelector } from "react-redux";
import store from "../redux/store";

const LeftDrawer = (props) => {

    const {openDrawer} = useSelector((store) => store.datas)

    const drawer = useRef(null);

    useEffect(()=>{
        if(openDrawer){
            drawer.current.openDrawer();
        }else{
            drawer.current.closeDrawer();
        }
    },[openDrawer])

    const navigationView = () => {
        return (
            <>
            {console.log("Drawer", openDrawer)}
                <LinearGradient colors={['#91C788', '#29745E']} style={styles.pic_container}>
                    <Image style={styles.user_pic} source={User_Pic}></Image>
                    <Text style={styles.user_name}>Guest</Text>
                </LinearGradient>
                <View style={styles.route_container}>
                    <TouchableOpacity style={styles.route_button}>
                        <View style={styles.wrapper}>
                            <Image style={styles.icon} source={Home_Icon} />
                            <Text style={styles.text}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.route_button}>
                        <View style={styles.wrapper}>
                            <Image style={styles.icon} source={Login_Icon} />
                            <Text style={styles.text}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        );
    }

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={navigationView}
        >
            {props.children}
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    pic_container: {
        flex: 0.25
    },
    user_pic: {
        width: 85,
        height: 85,
        borderRadius: 50,
        marginLeft:10,
        marginTop:20
    },
    user_name: {
        color:"#FFFFFF",
        fontSize:24,
        fontWeight:"700",
        paddingLeft:20,
        marginTop:20
    },
    route_container: {
        flex: 0.75
    },
    route_button: {
        flex: 0.1
    },
    icon: {
        width: 20,
        height: 20
    },
    text: {
        color: "#333333",
        fontSize: 16,
        paddingLeft: 20
    },
    wrapper: {
        flexDirection: "row",
        padding: 20
    }
})

export default LeftDrawer;