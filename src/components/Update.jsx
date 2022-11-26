import { doc, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db } from "../firebase"

const Update = (props) => {
  const [content, setContent] = useState(props.taskContent);
  const [date, setDate] = useState(props.taskDate);
  const taskDoc = doc(db, "tasks", props.taskId);

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const updateTask = async () => {
    await updateDoc(taskDoc, {
        content: content,
        date: date,
    });

    setContent(props.taskContent);
    setDate(props.taskDate);
  }
  return (
    <div>
        <input 
            type="text" 
            onChange={(e) => handleContent(e)}
            value={content}
        />
        <br />
        <input 
            type="datetime-local" 
            onChange={(e) => handleDate(e)}
            value={date}
        />
        <button onClick={updateTask}>更新</button>
    </div>
  )
}

export default Update
