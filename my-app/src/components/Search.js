// import react from 'react'
import { MdSearch } from 'react-icons/md'
import classes from './Search.module.css'

const Search = (props) => {
    return (
        <div className={classes.searchContainer}>
            <MdSearch className={classes.searchIcon} />
            <input onChange={(e)=>{props.handleSearch(e.target.value)}} type='text' placeholder='Type to search...' className={classes.searchText} />
        </div>
    )
}

export default Search;