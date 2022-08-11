/* eslint react/prop-types: 0 */
import React from "react";

const SearchUser = ({ search, setSearch }) => {
    return (
        <nav className="user-search_wrapper">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Recherche d&apos;un utilisateur : </label>
                <input
                    id="search"
                    type="text"
                    placeholder="nom ou prénom ou email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </nav>
    )
}

export default SearchUser