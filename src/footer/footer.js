import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <footer>
            
            <div className="footer-container">
                <div className="text">
                    <h1 className="title">TESTAR O PREMIUM DE GRAÇA</h1>
                    <p className="subtitle">inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
                </div>

                <button className="footer-button">
                    <p className="text-button">Inscreva-se grátis</p>
                </button>
            </div>
        </footer>
    )
}

export default Footer