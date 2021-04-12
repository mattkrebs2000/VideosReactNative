import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    ScrollView,
    contentContainerStyle,
    Linking,
    Modal, 
    Pressable,
    Dimensions
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";
  import { WebView } from "react-native-webview";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";

 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");
 
 
 const App = () => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");
   const [modalVisible, setModalVisible] = useState(false);
   const [playing, setPlaying] = useState(false);

   const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
  };

  const header = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/menu.png",
  };


   const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode, playing)
    setPlaying(false)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });
  
 return (
    
    <SafeAreaView style={styles.container}>
    
  
    <Modal
    animationType="fade"
    transparent={false}
    visible={modalVisible}
    supportedOrientations={['landscape']} 
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.centeredView}>
        <View style={styles.video2}>
    <WebView
    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
 />
    </View>

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
    
    </View>
  </Modal>


    {mode === "portrait" ? <View style={styles.imagecontainer}>
    <ImageBackground source={image} style={styles.image}>
    <Icon name="play" color="white" size={100} onPress={() => setModalVisible(true)} />
    </ImageBackground>
  
    </View> : null}
    <View style={mode === "portrait" ? styles.imagecontainer2 : styles.imagecontainer3}>
      <ImageBackground source={header} style={styles.image2}>
        <View style={styles.linkcenter}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          ><View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Home</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => setModalVisible(true)}>VideoInModal</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Products</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Services</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Design</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Contact</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
    <ScrollView style={styles.text}>
      <View style={styles.innertext}>
        <Text style={styles.heading}>
          You may use this template in any manner you like. All I ask is that
          you leave the link back to my site at the bottom of the page.
        </Text>
        <Text style={styles.heading2}>Template Notes</Text>
        <Text style={styles.text2}>
          The main image can be changed by either replacing the current image
          with another one of the same size (900x402), or using a new one of
          what ever dimensions you'd like. If you choose the latter, you must
          open up style.css and change the dimensions of #mainpic, as well as
          the file name if that is different. If you would like to move the
          heading around in the above image, find "#mainpic h1" in style.css
          and modify it's "left" and "top" properties, this is also true for
          the h2 tag.
        </Text>
        <Text style={styles.heading2}>More Information</Text>
        <Text style={styles.text2}>
          I decided to leave the content portion open for the templates users
          to do as they wish with a blank canvas. I don't like to restrict my
          users too much, and for this reason I leave the defining of any
          content related styles to you.
        </Text>
        <Text style={styles.heading2}>Template Notes</Text>
        <Text style={styles.text2}>
          The main image can be changed by either replacing the current image
          with another one of the same size (900x402), or using a new one of
          what ever dimensions you'd like. If you choose the latter, you must
          open up style.css and change the dimensions of #mainpic, as well as
          the file name if that is different. If you would like to move the
          heading around in the above image, find "#mainpic h1" in style.css
          and modify it's "left" and "top" properties, this is also true for
          the h2 tag.
        </Text>
        <Text style={styles.heading2}>More Information</Text>
        <Text style={styles.text2}>
          I decided to leave the content portion open for the templates users
          to do as they wish with a blank canvas. I don't like to restrict my
          users too much, and for this reason I leave the defining of any
          content related styles to you.
        </Text>
        <Text style={styles.heading2}>Template Notes</Text>
        <Text style={styles.text2}>
          The main image can be changed by either replacing the current image
          with another one of the same size (900x402), or using a new one of
          what ever dimensions you'd like. If you choose the latter, you must
          open up style.css and change the dimensions of #mainpic, as well as
          the file name if that is different. If you would like to move the
          heading around in the above image, find "#mainpic h1" in style.css
          and modify it's "left" and "top" properties, this is also true for
          the h2 tag.
        </Text>
        <Text style={styles.heading2}>More Information</Text>
        <Text style={styles.text2}>
          I decided to leave the content portion open for the templates users
          to do as they wish with a blank canvas. I don't like to restrict my
          users too much, and for this reason I leave the defining of any
          content related styles to you.
        </Text>
        <Text style={styles.heading2}>Template Notes</Text>
        <Text style={styles.text2}>
          The main image can be changed by either replacing the current image
          with another one of the same size (900x402), or using a new one of
          what ever dimensions you'd like. If you choose the latter, you must
          open up style.css and change the dimensions of #mainpic, as well as
          the file name if that is different. If you would like to move the
          heading around in the above image, find "#mainpic h1" in style.css
          and modify it's "left" and "top" properties, this is also true for
          the h2 tag.
        </Text>
        <Text style={styles.heading2}>More Information</Text>
        <Text style={styles.text2}>
          I decided to leave the content portion open for the templates users
          to do as they wish with a blank canvas. I don't like to restrict my
          users too much, and for this reason I leave the defining of any
          content related styles to you.
        </Text>
        <Text style={styles.heading2}>Template Notes</Text>
        <Text style={styles.text2}>
          The main image can be changed by either replacing the current image
          with another one of the same size (900x402), or using a new one of
          what ever dimensions you'd like. If you choose the latter, you must
          open up style.css and change the dimensions of #mainpic, as well as
          the file name if that is different. If you would like to move the
          heading around in the above image, find "#mainpic h1" in style.css
          and modify it's "left" and "top" properties, this is also true for
          the h2 tag.
        </Text>
        <Text style={styles.heading2}>More Information</Text>
        <Text style={styles.text2}>
          I decided to leave the content portion open for the templates users
          to do as they wish with a blank canvas. I don't like to restrict my
          users too much, and for this reason I leave the defining of any
          content related styles to you.
        </Text>
        <Text style={styles.heading2}>Template Notes</Text>
        <Text style={styles.text2}>
          The main image can be changed by either replacing the current image
          with another one of the same size (900x402), or using a new one of
          what ever dimensions you'd like. If you choose the latter, you must
          open up style.css and change the dimensions of #mainpic, as well as
          the file name if that is different. If you would like to move the
          heading around in the above image, find "#mainpic h1" in style.css
          and modify it's "left" and "top" properties, this is also true for
          the h2 tag.
        </Text>
        <Text style={styles.heading2}>More Information</Text>
        <Text style={styles.text2}>
          I decided to leave the content portion open for the templates users
          to do as they wish with a blank canvas. I don't like to restrict my
          users too much, and for this reason I leave the defining of any
          content related styles to you.
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
   );
 }
 const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e4297",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      },

      // imagecontainer: {
      //   justifyContent: "flex-start",
      //   alignItems: "center",
      //   flex: 0.4,
      //   width: "90%",
      //   backgroundColor: "green",
      //   marginTop: 0,
      // },

      imagecontainer: {
        justifyContent: "flex-start",
        flex: 0.4,
        width: "90%",
        backgroundColor: "green",
        marginTop: 0,
      },
      image: {
        width: "100%",
        
        height: "100%",
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: "center"
                 
      },


      image2: {
        width: "100%",
        marginLeft: "5@s",
        marginRight: "5@s",
        height: "100%",
      },
      imagecontainer2: {
        alignItems: "center",
        flex: 0.1,
        width: "90%",
       
      },
      imagecontainer3: {
        alignItems: "center",
        flex: 0.2,
        width: "90%",
      },
      text: {
        flex: 0.8,
        width: "90%",
        backgroundColor: "white",
      },
      innertext: {
        margin: "10@s",
      },
      links: {
        color: "white",
        fontWeight: "bold",
        marginRight: "25@s",
        marginLeft: "15@s",
        fontSize: "10@s",
      },
      links2: {
        color: "white",
        fontWeight: "bold",
        marginRight: "25@s",
        marginLeft: "15@s",
        fontSize: "14@s",
      },
    
      heading2: {
        color: "black",
        fontWeight: "700",
        fontSize: "18@s",
        marginTop: "20@s",
      },
    
      heading: {
        color: "black",
        fontWeight: "bold",
        marginBottom: "5@s",
        fontSize: "18@s",
      },
      text2: {
        color: "black",
        fontSize: "15@s",
      },
    
      linkcenter2: {
        height: "100%",
        justifyContent: "center",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom:20,
      },

      centeredView: {
        flexDirection: "column",
        flex: 1,
        width: "100%",
        backgroundColor: "black",
        marginTop: -8,
        alignItems: "center",
        height: "200%",
      },
    
      video2: {
        flex:1,
        width: "105%",
        backgroundColor: "black",

      },

 });
 export default App;