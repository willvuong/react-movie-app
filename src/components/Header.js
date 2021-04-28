import SearchBar from './SearchBar.js'

const Header = ({ movieSearch, searchKeyword, searchEvent}) => {
    return (
        <header className="header">
            <h1>Movie DB App</h1>
            <SearchBar movieSearch={movieSearch} searchKeyword={searchKeyword} searchEvent={searchEvent}/>
        </header>
    )
}

export default Header
