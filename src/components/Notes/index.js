import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Main,
  Head,
  Form,
  InputEl,
  InputElDesc,
  Image,
  Button,
  Bot,
  No,
  NoDesc,
  List,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notesList, updateList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeDesc = event => setDescription(event.target.value)
  const onSubmitForm = event => {
    event.preventDefault()
    const newItem = {
      id: uuidv4(),
      title,
      description,
    }
    updateList(prevList => [...prevList, newItem])
    setTitle('')
    setDescription('')
  }
  return (
    <Main>
      <Head>Notes</Head>
      <Form onSubmit={onSubmitForm}>
        <InputEl
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <InputElDesc
          rows="4"
          value={description}
          onChange={onChangeDesc}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </Form>
      {notesList.length === 0 ? (
        <Bot>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <No>No Notes Yet</No>
          <NoDesc>Notes you add will appear here</NoDesc>
        </Bot>
      ) : (
        <List>
          {notesList.map(each => (
            <NoteItem details={each} key={each.id} />
          ))}
        </List>
      )}
    </Main>
  )
}

export default Notes
