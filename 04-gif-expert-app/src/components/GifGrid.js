import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem'
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

	const { data:images, loading } = useFetchGifs( category );

  	return (
		<>
			<h3 className='animate__animated animate__fadeIn'>{ category }</h3>

			{ loading && <p className='animate__animated animate__flash'>Loading</p> }

			<div className='card-grid'>
				{
					images.map( img => <GifGridItem key={ img.id }{ ...img } />)
				}
			</div>
		</>

  )
}

const getImagesInfo = (images) => images.map(({id, title}) => <li key={id}>{title}</li>);

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}