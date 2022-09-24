import React, {useEffect, useState} from 'react';
import {jsonService} from "../../services/jsonplaceholder.service";

import Album from "../Album/Album";


const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        jsonService.getAlbums().then(({data}) => setAlbums([...data]))
        console.log(albums);
    },[])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;