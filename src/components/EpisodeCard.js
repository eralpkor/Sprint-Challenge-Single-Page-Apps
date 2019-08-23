import React from "react";
import { Card, Icon, Grid } from "semantic-ui-react";

export default function EpisodeCard(props) {
  const { name, air_date, episode, characters } = props.episode;

  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{air_date}</span>
          </Card.Meta>
          <Card.Description>Episode: {episode}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={characters}>
            <Icon name="user" />
            Characters: {characters.length}
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
