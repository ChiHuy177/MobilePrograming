import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserDetail = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          height: 300,
          justifyContent: 'center',
          backgroundColor: 'blue',
        }}>
        <Image source={{ uri: user.picture.large }} style={styles.avatar} />
        <Text
          style={
            (styles.name, { color: 'white', fontSize: 25, fontWeight: 'bold' })
          }>
          {user.name.first} {user.name.last}
        </Text>
        <Text
          style={
            (styles.name, { color: 'white', fontSize: 25, fontWeight: 'bold' })
          }>
          Phone: {user.phone}
        </Text>
      </View>
      <View style={{ padding: 20, fontSize: 20, borderBottomWidth: 1,
    borderBottomColor: '#ccc', }}>
        <Text>Email: {user.email}</Text>
      </View>
      <View style={{ padding: 20, fontSize: 20 , borderBottomWidth: 1,
    borderBottomColor: '#ccc', }}>
        <Text>Work: {user.cell}</Text>
      </View>
      <View style={{ padding: 20, fontSize: 20  , borderBottomWidth: 1,
    borderBottomColor: '#ccc',}}>
        <Text>Personal: {user.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UserDetail;
