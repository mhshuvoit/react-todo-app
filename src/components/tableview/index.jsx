import React from 'react'
import PropTypes from 'prop-types'
import { Table, CustomInput, Button } from 'reactstrap'

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <th scope='row'>
                <CustomInput
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>
                {todo.text}
            </th>
            <th>
                {todo.des}
            </th>
            <th>
                <Button
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </th>
        </tr>
    )
}

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
    <Table>
        <thead>
            <tr>
                <th>Select</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </tbody>
    </Table>
);

TableView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TableView