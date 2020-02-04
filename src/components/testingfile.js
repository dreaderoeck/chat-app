
function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar"/>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div className={props.online ? 'status-online' : 'status-offline'} />
          <span className="status-text">
            {props.online ? 'online' : 'offline'}
          </span>
        </div>
      </div>
    </div>
  );
}