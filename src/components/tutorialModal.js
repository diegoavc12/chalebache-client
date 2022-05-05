import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import './styles/tutorialModal.css';

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
                    <h3>Instrucciones</h3>
                    <ol>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                    </ol>
                    <video controls>
                        <source src="" type=""></source>
                    </video>
                </Modal.Content>
            </Modal>
        </div>
    )
};

export default TutorialModal;