import {FC} from 'react';
import {FlatList} from 'react-native';

import {users} from '@assets/data/users';
import UserSearchScreenListItem from '@components/user-search/list-item';

interface Props {}

const UserSearchScreen: FC<Props> = props => {
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id}
      renderItem={({item}) => <UserSearchScreenListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
