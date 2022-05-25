import React, { useContext, useState, useEffect, useRef } from 'react';
import { Input, Segment, Table, Button, Icon } from 'semantic-ui-react';
import { BacheContext } from './bacheContext';
import './styles/potholesList.css';
import EliminarBache from './modalCRUD.js';
import MostrarEnMapa from './mostrarEnMapa.js';
import CheckBox from './checkBox.js';
import _ from 'lodash';

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
    const { data, setBache } = useContext(BacheContext)
    const searchBox = useRef()
    const optionsBox = useRef()
    const [matchEvent, setMatchEvent] = useState(data)

    const userSearch = (searchQuery, potholes) => {
        let eventMatch = []

        if (searchQuery.length > 0 && potholes) {
            let potholeTitle;
            for (const pothole in potholes) {
                if (potholes[pothole]._id === undefined || potholes[pothole]._id === null) {
                    potholeTitle = potholes[pothole].id.toLowerCase();
                } else if (potholes[pothole].id === undefined || potholes[pothole].id === null) {
                    //console.log(potholes[pothole]._id.toLowerCase());          
                    potholeTitle = potholes[pothole]._id.toLowerCase();
                }
                let potholefirstIncident = potholes[pothole].firstIncident.toLowerCase();
                let potholeLastIncident = potholes[pothole].lastIncident.toLowerCase();
                let potholenumIncident = potholes[pothole].numIncidents.toString();
                if (potholeTitle.indexOf(searchQuery) !== -1) {
                    eventMatch.push(potholes[pothole])
                } else if (potholefirstIncident.indexOf(searchQuery) !== -1) {
                    eventMatch.push(potholes[pothole])
                } else if (potholeLastIncident.indexOf(searchQuery) !== -1) {
                    eventMatch.push(potholes[pothole])
                } else if (potholenumIncident.indexOf(searchQuery) !== -1) {
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
        state.ndata = matchEvent
        state.column = null
        state.direction = null
    }, [matchEvent])
    return (
        <Segment.Group>
            <Segment id='buscador'>
                <Input className='buscadorBaches' placeholder='Busca un bache' fluid>
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
                    <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </Input>
            </Segment>
            <Segment id='tabla'>
                <Table color="white" selectable sortable celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell sorted={column === 'id' ? direction : null}
                                onClick={() => {
                                    dispatch({ type: 'CHANGE_SORT', column: 'id' })
                                }}><h3>ID</h3></Table.HeaderCell>
                            <Table.HeaderCell><h3>Fecha de detecci&#243;n</h3></Table.HeaderCell>
                            <Table.HeaderCell><h3>&#218;ltima detecci&#243;n</h3></Table.HeaderCell>
                            <Table.HeaderCell sorted={column === 'numIncidents' ? direction : null}
                                onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'numIncidents' })}><h3>Incidentes</h3></Table.HeaderCell>
                            <Table.HeaderCell><h3>Reparado</h3></Table.HeaderCell>
                            <Table.HeaderCell><h3>-</h3></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body className='tablaBaches'>
                        {console.log(state.ndata)}
                        {ndata.map((pothole, i) => {
                            return (<Table.Row>
                                <Table.Cell>{pothole.id}</Table.Cell>
                                <Table.Cell>{pothole.firstIncident}</Table.Cell>
                                <Table.Cell>{pothole.lastIncident}</Table.Cell>
                                <Table.Cell>{pothole.numIncidents}</Table.Cell>
                                <Table.Cell>
                                    <CheckBox />
                                </Table.Cell>
                                <Table.Cell warning={true} key={i} onClick={() => {
                                    setBache(pothole)
                                }}>
                                    <Button.Group>
                                        <MostrarEnMapa />
                                        <Button.Or />
                                        <EliminarBache />
                                    </Button.Group>
                                </Table.Cell>
                            </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </Segment>
        </Segment.Group>
    );
}

export default Lista
