import React from 'react';
import {
  Container,
  Content,
  Footer,
  Form,
  Input,
  Item,
  View,
  Thumbnail,
  Label,
  Left,
  Grid,
  Row,
  Text,
  FooterTab,
  Button,
} from 'native-base';

function App() {
  return (
    <Container>
      <Grid>
        <Row size={10}>
          <View>
            <Text>Slamet</Text>
          </View>
        </Row>
        <Row size={90}>
          <Form>
            <Item stackedLabel>
              <Label>Merchant ID</Label>
              <Input defaultValue="A0101" />
            </Item>
            <Item stackedLabel>
              <Label>Status</Label>
              <Input defaultValue="Aktif" />
            </Item>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input defaultValue="Slamet" />
            </Item>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input defaultValue="Slamet" />
            </Item>
          </Form>
        </Row>
      </Grid>
      <Footer>
        <FooterTab>
          <Button>
            <Text>Simpan</Text>
          </Button>
          <Button>
            <Text>Hapus</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default App;
