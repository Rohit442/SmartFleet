import React from "react";
import  {View, Text, Image, ImageBackground,StyleSheet} from 'react-native'

const ViewImageScreen = () =>{
    return(<View style={styles.container}>
        <View style={{flexDirection:"row"}}>
            <View style = 
            {[{backgroundColor:"#4ECDC4",left:0},styles.buttons]} />
            <View style = 
            {[{backgroundColor:"#fc5c65",right:0},styles.buttons]} />
        </View>
        <Image style={{width:"100%",height:"80%",position:"absolute",bottom:30}} source={require("first-app/assets/chair.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    buttons:{
        top: 10,
        width:40,
        height:40,
        margin:10,
        position:"absolute",
    },
})
export default ViewImageScreen;