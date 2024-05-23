import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchSentanceApi } from '../apis/SearchSentanceApi';

function SearchSentance() {
    const [searchText, setSearchText] = useState("");
    const [subCategory, setSubCategory] = useState("");
    useEffect(() => {
        // getAllBanner(searchText)
    }, [])
    const getAllBanner = (searchText) => {
        let data = { "sentance": searchText };
        SearchSentanceApi.getAllSentance(data)
            .then((res) => {
                console.log(res.data.subCat)
                setSubCategory(res.data.subCat)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div className="header">
                <Link to="/"><h1 className='logo'></h1></Link>
                <div className='search-box'>
                    <input type="text"
                        // placeholder='Write Something Here '
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => getAllBanner(searchText)}>
                        Search
                    </button>
                </div>
            </div>
            {subCategory ?
                <>
                    <h1>search word</h1>
                    <h1> {subCategory.map((item, i) =>
                    (
                        <>
                            <span key={i}> {item.word}{"== "}</span>
                            <span>{item.category.map((item1, index) => `${item1}  `)} </span>
                            <br></br>
                        </>
                    ))}</h1>
                </> :
                null
            }

        </>
    );
}

export default SearchSentance;
