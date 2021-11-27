import React,{useState}from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';

const Gallery= () => {
  const [imageUri,setimageUri]= useState ('')

 
 
  const openGallery = () => { 
    let options= {
      storageOption:{
        path:'images',
        mediaType:'photo'

      },
      includeBase64: true,
    }

    launchImageLibrary(options, response=> {
      console.log('Response =',response)
    if (response.didCancel){
      console.log('User cancelled image picker');
    }
    else if (response.error){
      console.log('ImagePicker Error',response.error);
    }
    else if (response.customButton){
      console.log('User tapped custom button:', response.customButton);
    }
    else{
      const source = {uri: 'fata:image/jpeg;base64,' + response.base64}
      setimageUri(source);
    }
    });

  };
console.log(imageUri)
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center', flex:1 }}>
      <Button title={'open camera'} onPress={()=>{
        // alert("pressed")
        openCamera()
      }}
      />
      
      <Image
      source={imageUri}
      style= {{
        height: 100, 
        width:100, 
        borderWidth:2,
        borderColor:'black'
      }}
      />
      <Button title={'Upload Document'} onPress={()=>{
        // alert("pressed")
        openGallery()

      }}
      />
      <Image
      source={imageUri}
      style= {{
        height: 100, 
        width:100, 
        borderWidth:2,
        borderColor:'black'
      }}
      />
      </View>
     
    </SafeAreaView>
  );
};

export default Gallery;