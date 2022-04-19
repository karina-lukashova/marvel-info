import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setItemsLoading] = useState(false);
    const [offset, setOffset] = useState(Math.floor(Math.random() * (600 - 10) + 10));
    const [charEnded, setCharEnded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (offset) => {
        setItemsLoading(true);
        getAllCharacters(offset)
            .then(data => onCharListLoaded(data))
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setItemsLoading(newItemsLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const renderItems = (arr) => {
        const visibleList = arr.map((char, index) => {
            return (
                <li
                    ref={el => itemRefs.current[index] = el}
                    className="char__item"
                    key={char.id}
                    onClick={() => {
                        props.onCharSelected(char.id);
                        focusOnItem(index);
                    }}
                    onKeyPress={(evt) => {
                        if (evt.key === ' ' || evt.key === "Enter") {
                            props.onCharSelected(char.id);
                            focusOnItem(index);
                        }
                    }}
                    tabIndex='0'>
                    <img src={char.thumbnail} alt={char.name}/>
                    <div className="char__name">{char.name}</div>
                </li>
            );
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {visibleList}
            </ul>
        )
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {content}
            <button
                className="button button__main button__long"
                disabled={newItemsLoading}
                style={{display: charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
};

export default CharList;