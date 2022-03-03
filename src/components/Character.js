import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Characters from './Characters'
import './Charactres.css'

const Character = () => {

    const [page, setPage] = useState(1)

    const fetchCharacter = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return await response.json()
    }

    const { data, status } = useQuery(['character', page], fetchCharacter, {
        keepPreviousData: true
    })

    if (status === 'loading') {
        return <div>Loading .....</div>
    }
    if (status === 'error') {
        return <div>Error ...</div>
    }
    return (
        <div className='character'>
            {
                data?.results?.map(character => (
                    <Characters character={character} key={character.id} />
                ))
            }
            <div>
                <button disabled={page === 1} onClick={() => setPage(Math.max(page - 1, 1))} className="btn">
                    Last page
                </button>
                <button onClick={() => setPage(page + 1)} className="btn">
                    Next page
                </button>
            </div>
        </div >
    )
}

export default Character
