import React, { Fragment } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { useInputState, useSet } from 'utils/hooks'
import Navbar from 'components/Navbar'
import Searchbar from 'components/Searchbar'
import EmptyState from 'components/EmptyState'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Card from 'components/Card'

const App = () => {
	const [search, setSearch] = useInputState('hey')

	const { loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
	].join(''))

	const [favorites, {toggle}] = useSet([])

	return(
		<Fragment>
			<Navbar/>
			<Searchbar value={search} onChange={setSearch}/>
			{/* <pre>{JSON.stringify({favorites: [...favorites]})}</pre> */}
			<Container>
				<Row vertical-gutter style={{margin: '2rem 0'}}>
					{!!search && !loading && data && data.results.map(({id, title, poster_path, release_date}) => (
						<Cell key={id} xs={6} sm={4} md={3} xg={2}>
							<Card
								id={id}
								title={title}
								image={poster_path}
								year={release_date.split('-')[0]}
								toggle={toggle}
								isFavorite={favorites.has(id)}
							/>
						</Cell>
					))}
				</Row>
			</Container>
			{/* {!!search && <pre>{JSON.stringify({error, loading, data}, null , 2)}</pre>} */}
			{!search && <EmptyState/>}
		</Fragment>
	)
}

export default App
