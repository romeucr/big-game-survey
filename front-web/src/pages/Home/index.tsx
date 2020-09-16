import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as GamerImage } from '../../assets/gamer.svg';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais jogos a galera mais gosta?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botao abaixo e saiba quais sao os jogos que os gamers estao escolhendo!
            </h3>
            <div className="home-actions">
                <button className="home-btn">
                    QUERO SABER QUAIS SAO
                </button>
                <div className="home-btn-icon">
                    <ArrowIcon />
                </div>
            </div>
        </div>
    <GamerImage />
    </div>

);

export default Home;