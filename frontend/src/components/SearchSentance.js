import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchSentanceApi } from '../apis/SearchSentanceApi';

function SearchSentance() {
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("");
    useEffect(() => {
        // getAllBanner(searchText)
    }, [])
    const getAllBanner = (searchText) => {
        let data = { "sentance": searchText };
        SearchSentanceApi.getAllSentance(data)
            .then((res) => {
                setCategory(res.data.message.map((item) => item))
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
          
            {category ?
                <h1 style={{"visibility":"hidden"}}> details: </h1>
                :
                null
            }
             {category ?
                <h1> category:{category.map((item, i) =>
                (
                    i%2 ===0 &&
                  
                        <span> {category[i]}{" "}</span>
                   
                ))}</h1> :
                null
            }
             {category ?
                <h1> sub category:{category.map((item, i) =>
                (
                    i%2 !=0 &&
                  
                        <span> {category[i]}{" "}</span>
                   
                ))}</h1> :
                null
            }
        </>
    );
}

export default SearchSentance;
