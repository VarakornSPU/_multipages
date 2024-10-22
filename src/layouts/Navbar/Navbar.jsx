import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';

const initPage = 'home';

function Navbar({ products, carts, setToken }) {
    const [tab, setTab] = useState(initPage);

    useEffect(() => {
        setTab(initPage);
    }, []);

    const buttonRefs = {
        home: useRef(),
        calculator: useRef(),
        animation: useRef(),
        components: useRef(),
        todo: useRef(),
        products: useRef(),
        carts: useRef(),
    };

    useEffect(() => {
        const ref = buttonRefs[tab] || buttonRefs.home;
        ref.current.click();
    }, [tab]);

    return (
        <div className='navbar-container'>
            <Link to={'/home'}>
                <button className={`btn ${tab === 'home' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('home')} ref={buttonRefs.home}>Home</button>
            </Link>
            <Link to={'/calculator'}>
                <button className={`btn ${tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('calculator')} ref={buttonRefs.calculator}>Calculator</button>
            </Link>
            <Link to={'/animation'}>
                <button className={`btn ${tab === 'animation' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('animation')} ref={buttonRefs.animation}>Animation</button>
            </Link>
            <Link to={'/components'}>
                <button className={`btn ${tab === 'components' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('components')} ref={buttonRefs.components}>Components</button>
            </Link>
            <Link to={'/todo'}>
                <button className={`btn ${tab === 'todo' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('todo')} ref={buttonRefs.todo}>Todo</button>
            </Link>
            <Link to={'/products'}>
                <button className={`btn ${tab === 'products' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('products')} ref={buttonRefs.products}>Products ({products.length})</button>
            </Link>
            <Link to={'/carts'}>
                <button className={`position-relative btn ${tab === 'carts' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setTab('carts')} ref={buttonRefs.carts}>
                    Cart
                    {carts.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carts.length < 10 ? carts.length : '9+'}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    )}
                </button>
            </Link>
            <button className='btn btn-outline-danger' style={{ marginLeft: '1rem' }} onClick={() => setToken('')}>Logout</button>
        </div>
    );
}

export default Navbar;
