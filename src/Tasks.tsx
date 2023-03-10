import React from 'react';
import {DataPropsType} from './App';

export type TasksPropsType = {
    data: DataPropsType
}

const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <h2>student:</h2>
            <ul>
                {props.data.students.map(s => <li>{s}</li>)}
            </ul>

            <div>{props.data.tasks.map(t => {
                    return (
                        <li><p>{t.title}</p> - <p>{t.isDone.toString()}</p></li>)
                }
            )
            }
            </div>

        </div>
    );
};
export default Tasks;