import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from "../firebase"
import Delete from './Delete';
import Update from './Update';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "tasks");

  useEffect(() => {
    const getTasks = async () => {
        const data = await getDocs(tasksCollectionRef);
        setTasks(data.docs.map((doc) => ({
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
        })).sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));

        onSnapshot(tasksCollectionRef, (task) => {
            setTasks(task.docs.map((doc) => ({
                id: doc.id,
                content: doc.data().content,
                date: doc.data().date,
            })).sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
        });
    }

    getTasks();
  }, [])
  return (
    <div>
        {tasks.map((task) => (
            <div key={task.id}>
                <h1>{task.content}</h1>
                <Delete taskId={task.id} />
                <Update taskId={task.id} taskContent={task.content} taskDate={task.date} />
            </div>
        ))}
    </div>
  )
}

export default List
