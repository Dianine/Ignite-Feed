import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from './Avatar'

import styles from './Post.module.css'
import Comment from './Comment'
import { useState } from 'react'


export default function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const pubishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale:ptBR,
    addSuffix: true
  })
  
  function handleCreateNemComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewComentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    console.log('ssssssss')
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src={author.avatarUrl}/>

        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
        </div>

        <time
          title={publishedAtDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {pubishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}> {line.content} </p>;
          } else if (line.type === 'link') {
            return <p key={line.content}> <a href="#"> {line.content} </a> </p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNemComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        onChange={handleNewCommentChange}
        value={newCommentText}
        name='comment'
        placeholder='Deixe um comentário'
        required={true}
        onInvalid={handleNewComentInvalid}
        />
      <footer>
        <button 
        type='submit'
        disabled={isNewCommentEmpty}
        >
          Públicar
          </button>
      </footer>
      </form>

      <div className={styles.commentList}>
       {comments.map(comment => {
        return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
          )
       })}
      </div>
    </article>
  )
}