const Contact = (props) => {
  return (
    <div>
      <button className="btn btn-secondary form-control">
        {props.contact.name}
      </button>
    </div>
  );
};

export default Contact;
