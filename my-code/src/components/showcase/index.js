import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconSvg from '../icon-svg'
import './showcase.scss'

const Showcase = ({ items }) => (
  <ul className='showcase'>
    {items.map((item) =>
      <li className='showcase-item' key={item.imdbID}>
        <Link to={`/movie-${item.imdbID}`}>
          <div className='showcase-item__favorite'>
            <button>
              <IconSvg name='icon-heart-white' />
            </button>
          </div>
          <figure className='showcase-item__image'>
            <div className='showcase-item__mask' />
            <img src={item.Poster} alt={item.Title} />
          </figure>
          <h2 className='showcase-item__title'>{item.Title}</h2>
          <small className='showcase-item__date'>{item.Year}</small>
        </Link>
      </li>
    )}
  </ul>
)

Showcase.defaultProps = {
  items: []
}

Showcase.propTypes = {
  items: PropTypes.array
}

export default Showcase
