import  { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import UserListItem from './UserListItem';

const UserList = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => console.error(error));
    }, []);

    const renderItem = ({ item }) => (
        <UserListItem
            user={item}
            onPress={() => navigation.navigate('UserDetail', { user: item })}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default UserList;