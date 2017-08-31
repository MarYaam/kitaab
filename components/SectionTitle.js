import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const SectionTitle = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  }, 

  render() {
    return (
        <View>
          <Text style={styles.label}>
          {this.props.text}
          </Text>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'space-mono',
    marginTop: 75,
    textAlign: 'center'
    // marginBottom: 15,
    //marginLeft: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
});

export default SectionTitle;
