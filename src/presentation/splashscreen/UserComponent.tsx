import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../../redux/slices/userSlice.ts';
import {RootState} from '../../redux/store';

const UserComponent: React.FC<{userId: number}> = ({userId}) => {
  const dispatch = useDispatch();
  const {user, loading, error} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      {user ? (
        <>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </>
      ) : (
        <Text>User not found</Text>
      )}
    </View>
  );
};

export default UserComponent;
