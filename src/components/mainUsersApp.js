import Map from './map';
import BacheInfo from './bacheInfo';
import Navbar from './navbar';
import { Grid} from 'semantic-ui-react'

export default function MainUsersApp () {
    return (
        <div>
             <Navbar></Navbar>
             <br />
                <Grid columns="equal">
                    <Grid.Row>
                         <BacheInfo/>
                    </Grid.Row>
                    <Grid.Row>
                        <Map class="l"/>
                    </Grid.Row>
                </Grid>

            <br />
        </div>
    )

}
