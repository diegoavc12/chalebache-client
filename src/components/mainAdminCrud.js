import Map from './map';
import Navbar from './navbarAdmin';
import PotholesDash from './potholesDash';
import { Grid } from 'semantic-ui-react';
import './styles/dashboard.css';
import FooterAdmin from './footerAdmin';

export default function MainAdminCRUD() {
    return (
        <div>
            <Navbar />
            <br />
            <Grid padded>
                <Grid.Row>
                    {/*<BacheCRUD/>*/}
                </Grid.Row>
                <Grid.Row>
                    <Map class="l" />
                </Grid.Row>
            </Grid>
            <PotholesDash className="grid" />
            <br />
            <br />
            <br />
            <br />
            <FooterAdmin />
        </div>
    )
}