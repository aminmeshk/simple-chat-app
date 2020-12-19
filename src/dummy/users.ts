import { User } from 'models';

const users: User[] = [
  new User(
    '1',
    'Santa Claus',
    'santa-claus.png',
    require('../assets/images/santa-claus.png'),
  ),
  new User(
    '2',
    'Snowman',
    'snowman.png',
    require('../assets/images/snowman.png'),
  ),
];

export default users;
