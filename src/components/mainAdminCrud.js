
import Map from './map';
import BacheCRUD from './bachelogs';
import Navbar from './navbarAdmin';
import PotholesDash from './potholesDash'
import { Grid} from 'semantic-ui-react'
import './styles/dashboard.css'



export default function MainAdminCRUD() {
        return (
            <div>
                <Navbar/>
                <br />
                <Grid columns="equal">
                    <Grid.Row>
                        <BacheCRUD/>
                    </Grid.Row>
                    <Grid.Row>
                        <Map class="l"/>
                    </Grid.Row>
                </Grid>
                <br />
                <br />
                <PotholesDash className="grid"/>
            </div>
        )
}
