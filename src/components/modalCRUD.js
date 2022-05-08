import React, { useContext, useEffect } from 'react';
import { BacheContext } from './bacheContext';
import { Button, Header, Modal, Icon } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/eraseModal.css';
import axios from 'axios';
toast.configure()

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const elimiBache = async (bache) => {
    try {
        console.log(bache)
        const API_CRUD = "https://chalebache-json-server.herokuapp.com"
        //const respOld = await axios.delete(`${API_CRUD}/potholes/${bache._id}`)
        const resp = await axios.delete(`${API_CRUD}/potholes/${bache.id}`)
    } catch (error) {

    }
}

function ModalExampleCloseIcon() {
    const [open, setOpen] = React.useState(false)
    const { bache } = useContext(BacheContext)
    const [enable, setEnable] = React.useState(true)
    const notification = () => {
        toast.success("Bache eliminado")

    }
    useEffect(() => {
        console.log(bache)
        if (isEmpty(bache)) {
            setEnable(true)
        } else {
            setEnable(false)
        }
    }, [bache])
    return (
        <div>
            <Modal id='modalGeneral'
                open={open}
                trigger={<Button id='botonEliminar' fluid size='large' floated="left" negative onClick={() => {
                    if (bache === undefined) {
                        toast.info("Por favor, selecciona el bache a eliminar")
                    } else {
                        setOpen(true)
                    }
                }}>Eliminar</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => {

                }}
            >
                <Header id='modalHeader' content='Estas seguro de eliminar el bache?' />
                <Modal.Content id='modalContent'>
                    <p><b>Nombre:</b></p>
                    <p>{bache.name}</p>
                    <p><b>ID:</b></p>
                    <p>{bache.id}{/* {<SemanticToastContainer position="top-right" />} */}</p>
                </Modal.Content>
                <Modal.Actions id='modalActions'>
                    <Button id='pButton' color='green' onClick={() => {
                        elimiBache(bache)
                        setOpen(false)
                        console.log("Bache eliminado")
                        notification()
                    }}>
                        Seguro
                    </Button>
                    <Button id='nButton' color='red' onClick={() => {
                        setOpen(false)
                    }}>
                        Cancelar
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>

    )
}

export default ModalExampleCloseIcon