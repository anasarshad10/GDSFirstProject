import React,{useState}from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [imageUri,setimageUri]= useState ('')

 
  const openCamera = () => { 
    let options= {
        storageOption:{
        path:'images',
        mediaType:'photo'

      },
      includeBase64: true,
    }

    launchCamera(options, response => {
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
      const source = {uri: 'data:image/jpeg;base64,' + response.base64}
      setimageUri(source);
    }
    });

  };
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
    <SafeAreaView style={{backgroundColor:"black" ,flex:1}}>
      <View style= {{}}> 
      <Button title={'open camera'} onPress={()=>{
        // alert("pressed")
        openCamera()
      }}
      />
      
      <Image
      source={imageUri}
      style= {{
        height: 250, 
        width:425, 
        borderWidth:2,
        borderColor:'grey'
      }}
      />
      
      

      </View>
        <View style={{justifyContent:'center', flex: 1}}>
        <Button title={'Upload Document'} onPress={()=>{
        // alert("pressed")
        openGallery()

      }}
      />
      <Image
      source={imageUri}
      style= {{
        height: 250, 
        width:425, 
        borderWidth:2,
        borderColor:'grey'
      }}
      />
      </View>

      
     
     
    </SafeAreaView>
  );
};
export default App;
