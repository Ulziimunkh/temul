import React from 'react'
import {useContext} from 'react'
import {WordContext} from '../context'

export default function WordFilter() {
    const context = useContext(WordContext);
    const {
        onChange, searchText
    } = context;
    return (
        <section className="filter-container">
            <form className="filter-form">
                <div className="search-container">
                    <input type="text" className="form-control" placeholder="Search word"  id="searchText" value={searchText} onChange={onChange} name="searchText"/>
                </div>
            </form>
        </section>
    )
}