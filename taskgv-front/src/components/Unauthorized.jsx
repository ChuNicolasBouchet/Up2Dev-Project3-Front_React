import React, { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>Non authorisé</h1>
            <br />
            <p>Vos droit ne vous permettent pas d{"'"}accéder à cette page</p>
            <div className="flexGrow">
                <button onClick={goBack}>Retour en arrière</button>
            </div>
        </section>
    )
}

export default Unauthorized