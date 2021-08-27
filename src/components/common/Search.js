import { useEffect, useState } from "react";


const Search = () => {
    const [isSearch, setIsSearch] = useState(false);
    const onSearchToggle = () => {
        setIsSearch(!isSearch)
    }
    useEffect (() => {
        const button = document.getElementsByClassName('reset-btn')
        const outsideClick = (e) => {
            const input = document.getElementById('search-content')
            console.log(e.target, button[0], input)
            if (input !== e.target.closest('#search-content') && button[0] !== e.target.closest('.reset-btn')) {
                setIsSearch(false)
            }
        }
        document.addEventListener('click', outsideClick)

        return () => {
            document.removeEventListener('click', outsideClick)
        }
    })
    return (
        <div className="search">
            <button className="reset-btn" onClick={onSearchToggle}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 17H18.065L17.645 16.595C19.115 14.885 20 12.665 20 10.25C20 4.865 15.635 0.5 10.25 0.5C4.865 0.5 0.5 4.865 0.5 10.25C0.5 15.635 4.865 20 10.25 20C12.665 20 14.885 19.115 16.595 17.645L17 18.065V19.25L24.5 26.735L26.735 24.5L19.25 17ZM10.25 17C6.515 17 3.5 13.985 3.5 10.25C3.5 6.515 6.515 3.5 10.25 3.5C13.985 3.5 17 6.515 17 10.25C17 13.985 13.985 17 10.25 17Z" fill="white" />
                </svg>
            </button>
            <div id="search-content">
                { isSearch && <input type="text" class="search__input" placeholder="я ищу..."></input> }
            </div>
        </div>
    )
}

export default Search