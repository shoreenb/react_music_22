import React from 'react';
import Album from './components/Albums';
import Artist from './components/Artists';

function App(){
    return (
        <main>
            <h1>Sensational Sounds for 2022</h1>
            <Album />
            <Artist />
        </main>
    );
}

export default App;
