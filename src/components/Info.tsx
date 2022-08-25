import { useState } from "react";
import "../styles/Components.css";
// import parsePhoneNumber, { PhoneNumber } from "libphonenumber-js";

type FormProps = {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>;
  phone: string,
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  address: string,
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

function EditInfoForm(props: FormProps) {
  
}

export default function Info() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="Component" id="Info">
      <div className="header">
        <h1>Info</h1>
        <button className="editInfo">Edit</button>
      </div>
      <div>
        <p><strong>Name</strong>: {name}</p>
        <p><strong>Phone</strong>: {phone}</p>
      </div>
      <p><strong>Address</strong>: {address}</p>
      <p><strong>Email</strong>: {email}</p>
    </section>
  );
}
