import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {
  View,
  Label,
  Text,
  List,
  ListItem,
  Body,
  Right,
  Button,
  Icon,
  Input,
  Card,
  CardItem,
  Fab,
  Container,
} from 'native-base';

function App() {
  const [modal, setModal] = useState(false);

  const category = [
    {
      name: 'Bakso',
    },
    {
      name: 'Soto',
    },
  ];

  const handleSave = () => {
    setModal(false);
  };

  function RenderList({item}) {
    return (
      <ListItem key={item.name}>
        <Body>
          <Text style={styles.text}>{item.name}</Text>
        </Body>
        <Right>
          <Button transparent onPress={() => setModal(true)}>
            <Icon
              style={{color: 'black', fontSize: 15}}
              type="FontAwesome5"
              name="edit"
            />
          </Button>
        </Right>
      </ListItem>
    );
  }

  return (
    <Container>
      <List>
        <FlatList
          data={category}
          renderItem={RenderList}
          keyExtractor={(item) => item.name}
        />
      </List>
      <Modal
        isVisible={modal}
        style={styles.modal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationOutTiming={50}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}>
        <Card style={styles.modalVIew}>
          <CardItem header style={styles.modalHeader}>
            <Text style={styles.text}>Edit kategori</Text>
          </CardItem>
          <CardItem>
            <Input
              defaultValue="Bakso"
              style={[styles.text, styles.input]}
              autoFocus
            />
          </CardItem>
          <CardItem
            footer
            style={styles.modalFooter}
            onPress={() => setModal(false)}>
            <Button transparent style={{marginTop: -10, marginBottom: -10}}>
              <Text style={{color: '#333333'}}>Simpan</Text>
            </Button>
            <Button transparent style={{marginTop: -10, marginBottom: -10}}>
              <Text style={{color: 'red'}}>Hapus</Text>
            </Button>
          </CardItem>
        </Card>
      </Modal>
      <Fab
        position="bottomRight"
        style={{backgroundColor: '#66c2ff'}}
        onPress={() => setModal(true)}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
}

const styles = StyleSheet.create({
  modalVIew: {
    // height: 180,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
  },
  modalFooterText: {
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#333333',
  },
  modalHeader: {
    borderBottomWidth: 0.3,
    borderColor: 'grey',
    paddingTop: 14,
    paddingBottom: 14,
  },
  modalFooter: {
    borderTopWidth: 0.3,
    borderColor: 'grey',
  },
  modalBody: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 6,
  },
});

export default App;
