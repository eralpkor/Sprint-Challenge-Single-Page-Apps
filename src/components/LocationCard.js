import React from "react";
import { Card, Icon, Grid } from "semantic-ui-react";

import styled from "styled-components";

const Title = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const StyledA = styled.a`
  background: #dedede !important;
  padding: 3px;
  border-radius: 5px;
`;

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
          <Title>
            <StyledA>
              <Icon name="user" />
              {residents.length} Residents
            </StyledA>
          </Title>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
