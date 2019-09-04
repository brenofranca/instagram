import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Items,
  Content,
  Header,
  ImageProfile,
  ImageFeed,
  Footer,
  User,
  Profile,
  ProfileMoreAction,
  ProfileMoreActionIcon,
  FooterAction,
  ActionsLeft,
} from './styles';

export default function feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    async function loadFeeds() {
      const {
        histories: {data},
      } = require('../../assets/database.json');

      setFeeds(data);
    }

    loadFeeds();
  }, []);

  return (
    <Items
      data={feeds}
      keyExtractor={item => String(item.login.uuid)}
      renderItem={({item}) => (
        <Content>
          <Header>
            <Profile>
              <ImageProfile source={{uri: item.picture.thumbnail}} />
              <User numberOfLines={1}>{item.login.username}</User>
            </Profile>
            <ProfileMoreAction onPress={() => {}}>
              <ProfileMoreActionIcon name="more-horiz" size={20} />
            </ProfileMoreAction>
          </Header>
          <ImageFeed source={{uri: item.picture.large}} />
          <Footer>
            <ActionsLeft>
              <FooterAction onPress={() => {}}>
                <Icon name="heart-o" size={25} />
              </FooterAction>
              <FooterAction onPress={() => {}}>
                <Icon name="comment-o" size={25} />
              </FooterAction>
              <FooterAction onPress={() => {}}>
                <Icon name="send-o" size={25} />
              </FooterAction>
            </ActionsLeft>
            <FooterAction onPress={() => {}}>
              <Icon name="bookmark-o" size={25} />
            </FooterAction>
          </Footer>
        </Content>
      )}
    />
  );
}
