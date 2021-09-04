import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewToDo from '../NewToDo/NewToDo';
import ListItem from '../ListItem/ListItem';
import { handlePlural } from '../../utils/utils';
import './List.css';

export default class List extends Component {
  state = {
    tasks: [
      {
        id: "sadfjasñldkjasd",
        value: "Hola"
      },
      {
        id: "dasddasd",
        value: "Hola 2"
      }
    ]
  }

  onAdd = (task) => {
    this.setState({ tasks: [
      ...this.state.tasks, 
      {
        id: uuidv4(),
        value: task
      }
    ]})
  }

  clearAll = () => {
    this.setState({ tasks: [] })
  }

  onDelete = (taskId) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== taskId) })
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="List">
        <h1>ToDo App</h1>

        <NewToDo onAdd={this.onAdd} />

        <div className="List-items">
          {this.state.tasks.map((task) => (
            <ListItem
              key={task.id}
              onDelete={() => this.onDelete(task.id)}
            >
              {task.value}
            </ListItem>
          ))}
        </div>

        <div className="List-actions">
          <p>
            {
              tasks.length > 0
                ? `You have ${tasks.length} pending ${handlePlural(tasks.length, "task", "tasks")}`
                : "Congratulations! You don't have any pending tasks!"
            }
          </p>

          {
            tasks.length > 1 && (
              <button onClick={this.clearAll}>Clear all</button>
            )
          }
        </div>
      </div>
    )
  }
}