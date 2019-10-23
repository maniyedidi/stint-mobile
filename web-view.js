import React, { Component } from 'react';
import { WebView, View, Text, StyleSheet } from 'react-native';

class StintWeb extends Component {
    render() {
        return (<View style={styles.container}>
            <Text>asjhdgahjsds</Text>
            <WebView
                source={{ uri: 'https://github.com/facebook/react-native' }}
                style={{ marginTop: 20 }}
            />
        </View>

        );
    }
}

export default StintWeb;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    video: {
        marginTop: 20,
        maxHeight: 200,
        width: 320,
        flex: 1
    }
});