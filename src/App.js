import React, {useEffect} from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
// import noteService from './services/notes'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

// store.dispatch({
// 	type: 'NEW_NOTE',
// 	data: {
// 		content: 'the app state is in redux store',
// 		important: true,
// 		id: 1
// 	}
// })

// store.dispatch({
// 	type: 'NEW_NOTE',
// 	data: {
// 		content: 'state changes are made with actions',
// 		important: false,
// 		id: 2
// 	}
// })


// const App = () => {
// 	const dispatch = useDispatch()
// 	const notes = useSelector(state => state)

// 	const addNote = (event) => {
// 		event.preventDefault()
// 		const content = event.target.note.value
// 		event.target.note.value = ''
// 		dispatch(createNote(content))
// 	}

// 	const toggleImportance = (id) => {
// 		dispatch(toggleImportanceOf(id))
// 	}
// 	return(
// 		<div>
// 		<form onSubmit={addNote}>
// 			<input name="note" />
// 			<button type="submit">add</button>
// 		</form>
// 		<ul>
// 			{notes.map(note=>
// 				<li key={note.id} onClick={() => toggleImportance(note.id)}>
// 					{note.content} <strong>{note.important ? 'important' : ''}</strong>
// 				</li>
// 			)}
// 			</ul>
// 		</div>
// 	)
// }

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeNotes())
		// noteService
		// 	.getAll().then(notes => dispatch(initializeNotes(notes)))
	}, [dispatch])

	return (
	  <div>
		<NewNote />
		<VisibilityFilter />
		<Notes  />
	  </div>
	)
  }

  export default App