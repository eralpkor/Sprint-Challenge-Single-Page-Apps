import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  const { image, name, species, location, origin, episode } = props.person;

  return (
    <Grid.Column>
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{species}</span>
          </Card.Meta>
          <Card.Description>Location: {location.name}</Card.Description>
          <Card.Description>Origin: {origin.name}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {episode.length} Episodes
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
