// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {RootState} from '../../redux/store';
// import {getEpisodeTest} from '../../redux/slices/EpisodeSlice.ts';
//
// const UserComponent: React.FC<{userId: number}> = ({userId}) => {
//   const dispatch = useDispatch();
//   const {data, loading, error} = useSelector(
//     (state: RootState) => state.episode,
//   );
//
//   useEffect(() => {
//     dispatch(getEpisodeTest());
//   }, [dispatch, userId]);
//
//   if (loading) {
//     return <Text>Loading...</Text>;
//   }
//
//   if (error) {
//     return <Text>Error: {error}</Text>;
//   }
//
//   return (
//     <View>
//       {data ? (
//         <>
//           <Text>Name: {data[0].name}</Text>
//           <Text>Email: {data[0].episode}</Text>
//         </>
//       ) : (
//         <Text>User not found</Text>
//       )}
//     </View>
//   );
// };
//
// export default UserComponent;
