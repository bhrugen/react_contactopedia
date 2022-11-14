import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index}></Contact>
      ))}
    </div>
  );
};

export default FavoriteContacts;
