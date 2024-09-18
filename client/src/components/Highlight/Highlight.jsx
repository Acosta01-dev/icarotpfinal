import './Highlight.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

function Highlight() {
    const [categories, setCategories] = useState([]);
    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/api/categories/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Categories fetched:', data);
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

        fetch('http://localhost:3030/api/highlights/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Highlights fetched:', data);
                setHighlights(data);
            })
            .catch(error => {
                console.error('Error fetching highlights:', error);
            });
    }, []);

    function Tags({ tags }) {
        return (
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}{index < tags.length - 1 && ' • '}
                    </span>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="highlight">
                {highlights.map((highlight) => {
                    const category = categories.find(cat => cat.id === highlight.categoryId);

                    return (
                        <div key={highlight.id} className="highlight-item"
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.781), rgba(0, 0, 0, 0.521)), url(${highlight.image})` }}>
                            <div>
                                <h3>{highlight.title}</h3>
                                <a href="#">{highlight.description} <FaArrowUpRightFromSquare /></a>
                                <i>{category ? category.description : 'Loading category...'}</i>
                                <div className="tags">
                                        <span className="tag">
                                           {category.name}
                                        </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Highlight;
