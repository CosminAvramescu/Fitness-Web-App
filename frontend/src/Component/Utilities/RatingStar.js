import React, {useState} from 'react';
import Button from "react-bootstrap/Button";

const RatingStar = () => {
        const [rating, setRating] = useState(1);
        const [hover, setHover] = useState(1);
        return (
            <div>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <Button
                            type="button"
                            size="sm"
                            key={index}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            variant="outline-dark"
                            style={{
                                backgroundColor: 'transparent',
                                color: index <= (hover || rating) ? "green" : "gray",
                                fontSize: index <= (hover || rating) ? "20px" : "18px"
                        }}
                        >
                            <span>&#9733;</span>
                        </Button>
                    );
                })}
            </div>
        );
}

export default RatingStar;