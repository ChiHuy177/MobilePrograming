import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const ContactThum = ({user, onPress}) => {
  

  const ImageContact = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageContact onPress={onPress}>
        <Image
          source={{
            uri: user.picture.thumbnail,
          }}
          style={styles.avatar}
        />
      </ImageContact>

      {user.phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{color: "white"}} />
        </View>
      )}
    </View>
  );
};

export default ContactThum;
ContactThum.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThum.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },


  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
