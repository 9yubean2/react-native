import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import EventButton from './EventButton';

const EventInput = () => {
    const [text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);
    const _onChangeText = text => setText(text); //컴포넌트의 텍스트가 변경되었을 때 변경된 텍스트의 문자열만 인수로 전달하며 호출

    return (
        <View>
            <Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
            <TextInput
                style={{ borderWidth: 1, padding: 10, fontSize: 20}}
                placeholder="Enter a text..."
                onChangeText={_onChangeText}
            />
        </View>
    );
};

export default EventInput;