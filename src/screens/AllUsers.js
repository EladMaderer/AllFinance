import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {FText} from '../common';

const AllUsers = props => {
  const users = useSelector(({signUpReducer}) => signUpReducer.registeredUsers);
  return (
    <View style={styles.container}>
      {users.length > 1 ? (
        <View style={{flex: 1}}>
          {users.map((user, i) => (
            <FText key={user.email}>
              {i !== 0 && `${user.username} - ${user.email}`}
            </FText>
          ))}
          <FText bold style={styles.totalUsers}>{`Total of ${
            users.length - 1
          } Users registered.`}</FText>
        </View>
      ) : (
        <FText style={styles.noUsersText}>No Registered Users!</FText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
  },
  noUsersText: {
    marginTop: 10,
  },
  totalUsers: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 30,
  },
});

export default AllUsers;
