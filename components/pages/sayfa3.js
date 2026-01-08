import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../components/style/style';

class sosyal extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.baslik}>SOSYAL MEDYA</Text>
                <Text style={styles.yazi}>www.x.com/kaanertugrulkoc</Text>
                <Text style={styles.yazi}>https://www.blogger.com/kaanertugrulkoc</Text>
            </View>
        );
    }
}


export default sosyal;