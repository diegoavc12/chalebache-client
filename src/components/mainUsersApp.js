import React, { Component, useState } from 'react'
import Test from './test';
import Map from './map';
import BacheInfo from './bacheInfo';
import Searchbar from './searchbar';
import AdminButton from './adminButton';
import { BacheProvider } from './bacheContext';


export default function MainUsersApp () {
    const [center, setCenter] = useState({
        lat: 20.731447,
        lng: -103.453257
      })
    return (
        <div>
            <div className="headE">
                <Searchbar id ="searchsito" center={setCenter}></Searchbar>
                <Test id="testsito"></Test>
                <AdminButton id="adminsito"></AdminButton>
            </div>
        
            <div className="wrapper">
                <BacheProvider>
                <Map class="l" center={center}/>
                <BacheInfo name="x" location="1,2" seriedad="10" className="infos"/>
                </BacheProvider>
            </div>
        </div>
    )

}
