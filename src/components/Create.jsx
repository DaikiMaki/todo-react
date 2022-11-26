import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db } from "../firebase"

const Create = () => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const tasksCollectionRef = collection(db, "tasks");

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const createTask = async () => {
    await addDoc(tasksCollectionRef, { content: content, date: date });

    setContent("");
    setDate("");
  }

  return (
    <div>
        <input 
            type="text" 
            placeholder='タスクを入力してください'
            onChange={(e) => handleContent(e)}
            value={content}
        />
        <br />
        <input 
            type="datetime-local" 
            onChange={(e) => handleDate(e)}
            value={date}
        />
        <button onClick={createTask}>登録</button>
    </div>
  )
}

export default Create
