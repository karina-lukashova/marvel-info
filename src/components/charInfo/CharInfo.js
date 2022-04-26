import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import './charInfo.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const { loading, error, getOneCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [props.charId])

    // componentDidUpdate срабатывает, когда у нас меняется props, когда меняется state или когда мы принудительно заставляем компонент перерендерится с помощью спец. функции

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props; 

        if (!charId) {
            return;
        }

        clearError();
        getOneCharacter(charId)
            .then(onCharLoaded)
    }

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char = {char} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const objectFit = thumbnail.includes('not_available') ? "contain" : "cover";

    const getComicsListElement = () => {
        if (typeof(comics) === 'string') {
            return (
                <li key={0} className="char__comics-item" style={{color: 'red'}} >
                    {comics}
                </li>
            )
        } else {
            const comicsList = comics.map((item, i) => {
                const comicId = item.resourceURI.replace('http://gateway.marvel.com/v1/public/comics/', '');
                return (
                    <li key={i} className="char__comics-item" >
                        <Link to={"/comics/" + comicId}>{item.name}</Link>
                    </li>
                )
            })
            return comicsList;            
        }
    };
    

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={{objectFit: objectFit}} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {getComicsListElement()}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;