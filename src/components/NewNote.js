import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
// import noteService from '../services/notes'

const NewNote = (props) => {
	// const dispatch = useDispatch()
	console.log(createNote)
  	console.log(props.createNote)

	const addNote = async (event) => {
		event.preventDefault()
		const content = event.target.note.value
		event.target.note.value = ''
		// const newNote = await noteService.createNew(content)
		props.createNote(content)
		// dispatch(createNote(content))
	}

	return (
		<form onSubmit={addNote}>
			<input name="note" />
			<button type="submit">add</button>
		</form>
	)
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 	  createNote: value => {
// 		dispatch(createNote(value))
// 	  },
// 	}
// }
// export default connect(
// 	null,
// 	mapDispatchToProps
// )(NewNote)


export default connect(
	null,
	{ createNote }
)(NewNote)