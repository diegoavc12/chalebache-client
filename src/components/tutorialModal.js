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
                            Para acceder al apartado de Administrador, da click sobre "Admin".
                            <br /><i>(Para m&#225;s instrucciones de este apartado, ve el video anexado)</i>
                        </li>
                        <li>
                            Para cerrar el Tutorial, da click sobre la "X" o en cualquier parte externa al Tutorial.
                        </li>
                    </ol>
                    <ReactPlayer
                        id='videoTuto'
                        url='https://vimeo.com/707027466'
                        controls
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
};

export default TutorialModal;