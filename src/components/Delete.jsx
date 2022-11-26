import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from "../firebase"

const Delete = (props) => {
  const taskDoc = doc(db, "tasks", props.taskId);

  const deleteTask = async () => {
    await deleteDoc(taskDoc);
  }
  return (
    <button onClick={deleteTask}>削除</button>
  )
}

export default Delete
