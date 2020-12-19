import { ImageSourcePropType } from 'react-native';

class User {
  id: string;
  name: string;
  profileImageName: string;
  profileImage: ImageSourcePropType;

  constructor(
    id: string,
    name: string,
    profileImageName: string,
    profileImage: ImageSourcePropType,
  ) {
    this.id = id;
    this.name = name;
    this.profileImageName = profileImageName;
    this.profileImage = profileImage;
  }
}
export default User;
