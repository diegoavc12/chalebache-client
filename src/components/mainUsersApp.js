import Map from './map';
import Navbar from './navbar';
import { Grid } from 'semantic-ui-react';
import './styles/map.css';
import Footer from './footer';

export default function MainUsersApp() {
    return (
        <div>
            <Navbar></Navbar>
            <br />
            <Grid padded>
                <Grid.Row>
                    {/*<BacheInfo/>*/}
                </Grid.Row>
                <Grid.Row>
                    <Map class="l" />
                </Grid.Row>
            </Grid>
            <Footer />
        </div>
    )
}