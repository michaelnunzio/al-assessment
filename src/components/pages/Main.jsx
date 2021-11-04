import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';

const Main = () => {


    const fetchApiData = async (url) => {
        const request = await fetch(url);
        const data = await request.json()
        return data?.results;
    }

    const [PKdata, setPKdata] = useState();
    const [SWdata, setSWdata] = useState();

    useEffect(() => {
        fetchApiData('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=6').then((data) => {
            setPKdata(data);
        });

        fetchApiData('https://swapi.dev/api/films/').then((data) => {
            setSWdata(data);
        });
      }, []);

    return (
        <>
        <header>
          <h1>Advance Local Assessment</h1>
        </header>
        <main>
            <div className="row">
                <Table
                cName={'sw-cont'}
                title={'Star Wars Movies'}
                flag={'sw'}
                data={SWdata}
                />
                <Table
                cName={'pk-cont'}
                title={'Pokemon Monsters'}
                flag={'pk'}
                data={PKdata}
                />
            </div>
        </main>
        </>
    )
}

export default  Main;