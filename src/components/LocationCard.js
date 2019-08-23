import React from "react";
import { Card, Icon, Grid } from "semantic-ui-react";


export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.place;

  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{type}</span>
          </Card.Meta>
          <Card.Description>Location: {dimension}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {residents.length} Residents
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
