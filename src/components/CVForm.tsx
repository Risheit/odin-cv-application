import React, { useState, FormEvent } from "react";

type FormItem = {
  item: any;
  setItem: React.Dispatch<React.SetStateAction<any>>;
  inputType: string;
};

type Props = {
  name: string;
  items: FormItem[];
};

export default function Form(props: Props) {
  const [formData, setFormData] = useState({ ...props.items });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.items.forEach((element, index) => {
      element.setItem(formData[index]);
    });
  };

  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      {props.items.map((item: FormItem) => (
        <span className="FormItem">
          <label htmlFor={item.item}>{item.item}</label>
          <input
            type={item.inputType}
            name={item.item}
            id={item.item}
            defaultValue={item.item}
            onChange={handleChange}
          />
        </span>
      ))}
    </form>
  );
}
