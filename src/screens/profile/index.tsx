import {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import FeedGridView from '@components/shared/feed-grid-view';
import {user} from '@assets/data/user';
import ListHeaderComponent from '@components/profile/list-header';
import {
  MyProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from 'src/@types/navigation';

interface Props {}

const ProfileScreen: FC<Props> = props => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const {navigate} = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route?.params?.userId;

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
