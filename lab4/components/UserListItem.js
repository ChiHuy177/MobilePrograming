
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UserListItem = ({ user, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        src={user.picture.thumbnail}
        style={{ width: 55, height: 55, borderRadius: 50 }}
      />
      <View style={{paddingLeft: 20}}>
        <Text style={styles.name}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={{color: 'blue', paddingTop: 5}}>{user.phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserListItem;
