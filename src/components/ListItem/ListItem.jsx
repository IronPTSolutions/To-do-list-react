import './ListItem.css';

const ListItem = ({ children, onDelete }) => {
  return (
    <div className="ListItem">
      {children}
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default ListItem;