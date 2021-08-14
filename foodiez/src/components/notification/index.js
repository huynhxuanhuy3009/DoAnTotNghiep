import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import {Icon} from 'native-base'


export const Notification = () => {
  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View>
      <TouchableOpacity onPress={onOpen}>
       <Text>giohang</Text>
      </TouchableOpacity>

      <Modalize  
        ref={modalizeRef}
        snapPoint={130}
        
      >
          <View style={{
              flex:1, 
              height:100
          }}>
              <Text>huy</Text>
          </View>
      </Modalize>
    </View>
  );
};