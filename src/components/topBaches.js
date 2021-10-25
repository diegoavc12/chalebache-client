import React from 'react'
import { Image, List, Icon } from 'semantic-ui-react'

const ListExampleHorizontalOrdered = () => (
  <List horizontal ordered>
    <List.Item>
        {/* <List.Icon name="marker"/> */}
        {/* <Icon name="marker"/> */}
      <Image circular  src={require('./imgs/marker.png').default} />
      <List.Content>
        <List.Header>Tom</List.Header>
        Top Contributor
      </List.Content>
    </List.Item>
    <List.Item>
      <Image  circular src={require('./imgs/marker.png').default} />
      <List.Content>
        <List.Header>Christian Rocha</List.Header>
        Admin
      </List.Content>
    </List.Item>
    <List.Item>
      <Image circular src={require('./imgs/marker.png').default} />
      <List.Content>
        <List.Header>Matt</List.Header>
        Top Rated User
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleHorizontalOrdered
