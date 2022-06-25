import React, { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>404 Page non trouvée</p>
            <div className="flexGrow">
                <Link to="/">Retour à l{"'"}acceuil</Link>
            </div>
        </article>
    )
}

export default Missing