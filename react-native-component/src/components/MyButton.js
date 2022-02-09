import React from 'react'; //리액트를 불러와서 사용할 수 있게 하는 코드 (필수)
import { TouchableOpacity, Text } from 'react-native'; //컴포넌트 추가 from 리액트 네이티브
import PropTypes from 'prop-types';

const MyButton = props => {
    console.log(props);
    return (
        <TouchableOpacity
          style={{
              backgroundColor: '#3498db',
              padding: 16,
              margin: 18,
              borderRadius: 8,
          }}
          onPress={() => props.onPress()}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>
                {props.children || props.title}
            </Text>
        </TouchableOpacity>
    );
};


MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};


MyButton.defaultProps = {
    title: 'Button',
}; 
export default MyButton;