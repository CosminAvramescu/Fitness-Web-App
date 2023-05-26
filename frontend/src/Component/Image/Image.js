import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageComponent = (props) => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                console.log(`http://localhost:8082/`+props.path+`/`+props.id.toString())
                const response = await axios.get(`http://localhost:8082/`+props.path+`/`+props.id.toString(), {
                    responseType: 'arraybuffer'
                }); // Replace with the actual URL to your backend endpoint

                const base64Image = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );
                setImageSrc(`data:image/jpeg;base64,${base64Image}`);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    return <img src={imageSrc} alt="Image"
                className={"rounded-circle"}
                style={{width:props.width, height:props.height}}/>;
};

export default ImageComponent;
