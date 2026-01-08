import React from 'react';
import { View, Text } from 'react-native';
import { stil, styles } from '../style/style';

class Sosyal extends React.Component {
    render() {
        return (
            <View>
                <Text style={stil.baslik}>SOSYAL MEDYA</Text>
                <Text style={stil.yazi}>www.x.com/kaanertugrulkoc</Text>
                <Text style={stil.yazi}>https://www.blogger.com/kaanertugrulkoc</Text>
            </View>
        );
    }
}


export default Sosyal;