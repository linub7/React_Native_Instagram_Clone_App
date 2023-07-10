import {FC} from 'react';

import FeedGridView from '@components/shared/feed-grid-view';
import {user} from '@assets/data/user';
import ListHeaderComponent from '@components/profile/list-header';
import {useRoute} from '@react-navigation/native';

interface Props {}

const ProfileScreen: FC<Props> = props => {
  const route = useRoute();

  return (
    <FeedGridView
      data={user?.posts}
      ListComponentHeader={
        <ListHeaderComponent
          bio={user?.bio}
          image={user?.image}
          name={user?.name}
        />
      }
    />
  );
};

export default ProfileScreen;
