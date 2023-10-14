import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = () => {

    const [search, setSearch] = useState('')
    const [items, setItems] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        function getCa() {
            axios
                .get(`http://localhost:3000/ca?name_like=${search}`)
                .then((res) => {
                    setItems(res.data)
                })
                .catch((err) => {
                    console.log("Cannot get data.");
                    console.log(err);
                })
        }
        if (search !== "") getCa()
    }, [search])

    return (
        <div className="flex h-[73px] mt-[60px] rounded-[10px] border-2 z-20 relative w-full" >
            <div className="flex-grow flex items-center bg-white rounded-l-[10px] overflow-hidden">
                <input className=" flex-grow font-inter font-bold max-w-sm w-full ml-8 bg-transparent focus:outline-none placeholder:text-light-gray " type="text" placeholder="Search by name" value={search} onChange={handleInputChange} />
            </div>
            <button className="font-bold text-white w-32 md:w-[186px] bg-primary border-2 border-primary rounded-r-[10px] overflow-hidden" >Search</button>
            {items.length > 0 && search !== "" &&
                <div className="absolute top-20 left-0 w-full bg-background-white p-2 flex flex-col gap-2 shadow-lg rounded-[10px]" >
                    {items?.map((i) => {
                        return (
                            <Link className="hover:bg-primary hover:text-background-white p-1 rounded" key={i.id} to={`/ca/${i.id}`} >{i.name}</Link>
                        )
                    })}
                </div>
            }
            {search !== "" && items.length === 0 &&
                <div className="absolute top-20 left-0 w-full bg-background-white p-2 flex flex-col gap-2 shadow-lg rounded-[10px]" >
                    {search !== "" && items.length === 0 && <p>No results found</p>}
                </div>
            }
        </div>
    )
}

export default SearchBar