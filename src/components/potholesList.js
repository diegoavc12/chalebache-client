import React, {useContext, useState, useEffect, useRef} from 'react'
import { Input, Segment, Table } from 'semantic-ui-react'
import { BacheContext } from './bacheContext'
import { toast } from 'react-toastify';
import _ from 'lodash'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          ndata: state.ndata.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        ndata: _.sortBy(state.ndata, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function Lista() {

  const {data, setBache} = useContext(BacheContext)
  const searchBox = useRef()
   const optionsBox = useRef()
   const [matchEvent, setMatchEvent] = useState(data)

  const userSearch = (searchQuery, potholes) => {
    let eventMatch = []

    if (searchQuery.length > 0 && potholes) {
      for(const pothole in potholes) {
        let  potholeTitle = potholes[pothole].name.toLowerCase();
        let  potholefirstIncident = potholes[pothole].firstIncident.toLowerCase();
        let  potholeLastIncident = potholes[pothole].lastIncident.toLowerCase();
        let  potholenumIncident = potholes[pothole].numIncidents.toString();
        if (potholeTitle.indexOf(searchQuery) !==-1) {
          eventMatch.push(potholes[pothole])
        }else if(potholefirstIncident.indexOf(searchQuery) !==-1) {
          eventMatch.push(potholes[pothole])
        }  else if (potholeLastIncident.indexOf(searchQuery) !==-1) {
          eventMatch.push(potholes[pothole])
        } else if(potholenumIncident.indexOf(searchQuery) !==-1) {
           eventMatch.push(potholes[pothole])
        } 
      }
      if (eventMatch === 0) {
        setMatchEvent(data)
      }
      setMatchEvent(eventMatch)
    } else {
      setMatchEvent(data)
    }
    }

  
  let [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    ndata: data,
    direction: null,
  })


  let { column, ndata, direction } = state

  useEffect(() => {
    state.ndata=matchEvent
    state.column=null
    state.direction=null
  },[matchEvent])
  
  return(
  <Segment.Group>
    <Segment>
      <Input placeholder='Busca un bache' fluid>
        <input
        ref={searchBox}
        onKeyUp={() => {
          let searchQuery = searchBox.current.value.toLowerCase()
          // setTimeout(() => {
          //   if (searchQuery === searchBox.current.value.toLowerCase()) {
          //     userSearch(searchQuery, data)
          //    }
          //  })
          userSearch(searchQuery, data)
           console.log(searchQuery)
        }}
        />
    </Input>
    </Segment>
    <Segment>
    <Table color="black" selectable sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell sorted={column === 'name' ? direction : null}
            onClick={() => {
              dispatch({ type: 'CHANGE_SORT', column: 'name' })
            }}>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Fecha de deteccion</Table.HeaderCell>
          <Table.HeaderCell>Ultimo incidente</Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'numIncidents' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'numIncidents' })}>Numero de incidentes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {console.log(state.ndata)}
        {ndata.map((pothole, i) => {
          return (<Table.Row key={i} onClick={() => {
            setBache(pothole)
            toast.info("Bache Seleccionado")
          }}>
            <Table.Cell>{pothole.id}</Table.Cell>
            <Table.Cell>{pothole.firstIncident}</Table.Cell>
            <Table.Cell>{pothole.lastIncident}</Table.Cell>
            <Table.Cell>{pothole.numIncidents}</Table.Cell>
          </Table.Row>
         ) })}
      </Table.Body>
    </Table>
    </Segment>
  </Segment.Group>
  )
}


export default Lista
