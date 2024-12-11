import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
      />
      <span style={{ 
        marginLeft: '8px',
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
};

export default TodoItem;