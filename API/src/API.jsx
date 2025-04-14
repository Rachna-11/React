import React, { useEffect, useState } from 'react';
import '../src/Api.css';

const API = () => {
    const [character, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://dragonball-api.com/api/characters?limit=10")
                .then((r) => r.json())
                .then((d) => {
                    console.log(d);
                    setCharacters(d.items || d);
                    setLoading(false);
                })
        }, 3000);
    }, []);

    const characterGrid = (
        <div className="character-grid">
            {character.map((char) => (
                <div  className="character-card">
                    <img src={char.image}  className="character-image" />
                    <div className="character">
                        <h3>{char.name}</h3>
                        <p><strong>Race:</strong> {char.race}</p>
                        <p><strong>Affiliation:</strong> {char.affiliation}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div className="container">
                <h2 className="title">Dragon Ball Characters</h2>
                {loading ? <p>Loading characters...</p> : characterGrid}
            </div>
        </>
    );
};

export default API;

