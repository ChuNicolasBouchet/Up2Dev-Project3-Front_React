/* eslint react/prop-types: 0 */
import React from "react";

const SearchProject = ({ search, setSearch }) => {
    return (
        <nav className="project-search_wrapper">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Recherche d&apos;un projet : </label>
                <input
                    id="search"
                    type="text"
                    placeholder="titre du projet"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </nav>
    )
}

export default SearchProject