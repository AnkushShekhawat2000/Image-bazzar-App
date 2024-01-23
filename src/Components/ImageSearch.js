import React,{useState, useEffect}  from "react"
import axios from "axios";

const ImageSearch = ({setImageList})=>{
    const [searchQuery, setSearchQuery] = useState("");
 
  useEffect(()=>{
    handleSearch()
  },[])


    function handleSearch(e){
       console.log(e);
    //    if(e){
    //     e.preventDefault();
    //    }

    e && e.preventDefault();


      
        console.log(searchQuery);

        axios.get("https://api.unsplash.com/search/photos",
        {
            headers: {
                "Accept-Version":"v1",
                Authorization : `Client-ID ${process.env.REACT_APP_UNPLASH_ACESS_KEY}`
    
            },

            params: {
                query: searchQuery || "random"
            }

        })
        .then((response) => {
            console.log(response.data);
            setImageList(response.data.results);
            

        })
        .catch((error) => {
            console.log(error);
        })
      

    }

    return (
        <div>
           
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Enter Search"
                value={searchQuery}
                onChange={(e=>setSearchQuery(e.target.value))}

                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch