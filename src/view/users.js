import React from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  View,
  Icon,
  Content,
  List,
  ListItem,
  Body,
  Right,
  Thumbnail,
  Left,
  Text,
  Button,
  Fab,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

function App() {
  const users = [
    {
      merchantId: 'A111',
      name: 'Slamet',
      username: 'slamet',
    },
    {
      merchantId: 'A112',
      name: 'Mamer',
      username: 'mamer',
    },
  ];

  const navigation = useNavigation();

  const RenderList = ({item}) => {
    return (
      <ListItem avatar>
        <Body>
          <Text>{item.username}</Text>
          <Text note numberOfLines={1}>
            {item.name}
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              type="FontAwesome5"
              name="edit"
              style={{color: 'black', fontSize: 15}}
            />
          </Button>
        </Right>
      </ListItem>
    );
  };

  return (
    <Container>
      <View>
        <List>
          <FlatList
            data={users}
            renderItem={RenderList}
            keyExtractor={(item) => item.name}
          />
        </List>
      </View>
      {/* <Fab
        position="bottomRight"
        style={{backgroundColor: 'red'}}
        onPress={() => navigation.navigate('ProductDetail')}>
        <Icon name="add" />
      </Fab> */}
    </Container>
  );
}

export default App;
