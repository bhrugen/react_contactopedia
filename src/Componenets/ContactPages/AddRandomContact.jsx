import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
  const responseFromAPI = await getRandomUser();
  console.log(responseFromAPI);

  return props.handleAddRandomContact({
    name:
      responseFromAPI.data.first_name + " " + responseFromAPI.data.last_name,
    email: responseFromAPI.data.email,
    phone: responseFromAPI.data.phone_number,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
