import React, {useContext} from 'react'
import { BacheContext } from './bacheContext'
import { Button, Header, Modal } from 'semantic-ui-react'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  toast.configure()


function ModalExampleCloseIcon() {
  const [open, setOpen] = React.useState(false)
  const { bache } = useContext(BacheContext)

  const notification = () => {
    toast.success("Bache eliminado")
   
  }


  return (
    <div>
      <Modal
        closeIcon
        open={open}
        trigger={<Button negative fluid onClick={() => {
          if (bache.name === undefined) {
             toast.info("Por favor selecciona un bache a eliminar")
          } else {
            setOpen(true)
          }
        }}>Eliminar</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => {
          
        }}
      >
        <Header content='Estas Seguro de eliminar el bache?' />
        <Modal.Content>
          <p>
            {bache.name}
            {/* {<SemanticToastContainer position="top-right" />} */}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => {
            setOpen(false)
          }}>
            No
          </Button>
          <Button color='green' onClick={() => {
            setOpen(false)
            console.log("Bache eliminado")
            notification()
            }}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>

  )
}

export default ModalExampleCloseIcon
