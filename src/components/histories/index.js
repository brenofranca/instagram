import React, {useEffect, useState} from 'react';
import {
  Container,
  MyHistoryList,
  MyHistory,
  MyHistoryBadge,
  MyHistoryImage,
  User,
} from './styles';

export default function histories() {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    async function loadHistories() {
      const {
        histories: {data},
      } = require('../../assets/database.json');

      const listHistories = data.map((item, index) => ({
        name: item.login.username,
        picture: item.picture.thumbnail,
        owner: index === 0,
      }));

      setHistories(listHistories);
    }

    loadHistories();
  }, []);

  return (
    !!histories.length && (
      <Container>
        <MyHistoryList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={histories}
          keyExtractor={item => String(item.name)}
          renderItem={({item}) => (
            <MyHistory withBorder={!item.owner}>
              <MyHistoryImage source={{uri: item.picture}} />
              <User numberOfLines={1}>{item.name}</User>
              {item.owner && <MyHistoryBadge name="plus-circle" />}
            </MyHistory>
          )}
        />
      </Container>
    )
  );
}
