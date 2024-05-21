import axios from "axios"


export const SearchSentanceApi = {
    getAllSentance: async (data) => {
        // console.log(data)
        var axiosConfig = {
            method: 'post',
            url: 'http://localhost:8002/api/admin/search-sentance',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axiosConfig);
    },

  
 
}