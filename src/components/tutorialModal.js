import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './styles/tutorialModal.css';
import ReactPlayer from 'react-player';

const TutorialModal = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Modal id='modalTuto'
                closeIcon
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button id='tutorialButton'>Tutorial</Button>}
            >
                <Modal.Header id='modalHeader'>
                    Tutorial
                </Modal.Header>
                <Modal.Content id='modalContent' image>
                    <h3>Instrucciones B&#225;sicas</h3>
                    <ol>
                        <li>
                            Para consultar la informaci&#243;n de los baches registrados, navega por el mapa y da click sobre los &#237;conos.
                        </li>
                        <li>
                            Para encontrar una direcci&#243;n espec&#237;fica, escr&#237;bela en el buscador y da "enter" para iniciar la b&#250;squeda.
                        </li>
                        <li>
                            Para trazar una ruta sobre el mapa, escr&#237;be las direcciones involucradas sobre los espacios correspondientes del cuadro de trazado y 
                            da click sobre el bot&#243;n "Trazar Ruta".
                        </li>
                        <li>
                            Para m&#225;s informaci&#243;n, ve el siguiente video que explicar&#225; todo sobre el uso de la p&#225;gina a detalle:
                        </li>
                    </ol>
                    <ReactPlayer
                        id='videoTuto'
                        url='https://vimeo.com/719452545'
                        controls
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
};

export default TutorialModal;