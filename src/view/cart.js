import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Content, Footer, FooterTab, List, Text} from 'native-base';

function App() {
  return (
    <Container>
      <Content>
        <List>
          
        </List>
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Text style={styles.text}>Lanjut ke pembayaran</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
});

export default App;
