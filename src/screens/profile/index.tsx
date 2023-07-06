import {FC} from 'react';

import FeedGridView from '@components/shared/feed-grid-view';
import {user} from '@assets/data/user';
import ListHeaderComponent from '@components/profile/list-header';

interface Props {}

const ProfileScreen: FC<Props> = props => {
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
