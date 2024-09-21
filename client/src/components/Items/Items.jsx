import './Items.css';
import { MdAddShoppingCart } from "react-icons/md";
import React, { useState, useEffect } from 'react';

const Items = ({ addToCart }) => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetch('http://localhost:3030/api/items/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Items fetched:', data);
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });

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
    }, []);

    const filteredItems = items
        .filter(item =>
            activeCategory === 1 || item.categoryId === activeCategory
        )
        .filter(item =>
            searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(item =>
            (minPrice === '' || item.price >= parseFloat(minPrice)) &&
            (maxPrice === '' || item.price <= parseFloat(maxPrice))
        )
        .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

    function Categories({ categories }) {
        return (
            <div className="categories">
                {categories.map((category) => (
                    <span
                        key={category.id}
                        className={`category ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </span>
                ))}
            </div>
        );
    }

    const handleAddToCart = (item) => {
        console.log('Item added to cart:', item);
        addToCart(item);
    };

    return (
        <>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button onClick={() => setSortOrder('asc')}>Sort by Price: Ascending</button>
                <button onClick={() => setSortOrder('desc')}>Sort by Price: Descending</button>
            </div>

            <Categories categories={categories} />

            <div className='items'>
                {filteredItems.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="container">
                            <div
                                className="top"
                                style={{
                                    background: `url(${item.image}) no-repeat center center`,
                                    backgroundSize: 'cover',
                                }}
                            >
                                <div className='top-info'>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <a href='#'>more info</a>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="left">
                                    <div className="details">
                                        <h1>{item.title}</h1>
                                        <p>₳ {item.price}</p>
                                        <i>{item.category.name}</i>
                                    </div>
                                    <div className="buy" onClick={() => handleAddToCart(item)} >
                                        <i><MdAddShoppingCart /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Items;
