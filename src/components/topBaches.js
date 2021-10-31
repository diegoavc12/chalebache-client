import React, {useContext, useEffect, useState} from 'react'
import { Image, List } from 'semantic-ui-react'
import { BacheContext } from './bacheContext'

function ListExampleHorizontalOrdered() {
  const {data} = useContext(BacheContext);
  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])
  const [third, setThird] = useState([])

  useEffect(() => {
    const sortedD =  (data.sort((a,b) =>{
    return a.numIncidents - b.numIncidents
  }))
  data.forEach((pothole,i) => {
    switch (i) {
      case data.length-1:
        setFirst(pothole)
        break;
      case data.length-2:
        setSecond(pothole)
        break;
      case data.length-3:
        setThird(pothole)
        break;
      default:
        break;
    }
  })
  },[])


  return(
  <List horizontal ordered>
    <List.Item>
      <Image circular  src={require('./imgs/marker.png').default} />
      <List.Content>
        <List.Header>{first.name}</List.Header>
        {first.numIncidents}
      </List.Content>
    </List.Item>
    <List.Item>
      <Image  circular src={require('./imgs/marker.png').default} />
      <List.Content>
        <List.Header>{second.name}</List.Header>
        {second.numIncidents}
      </List.Content>
    </List.Item>
    <List.Item>
      <Image circular src={require('./imgs/marker.png').default} />
      <List.Content>
        <List.Header>{third.name}</List.Header>
        {third.numIncidents}
      </List.Content>
    </List.Item>
  </List>)
}

export default ListExampleHorizontalOrdered
