import React, { useState, FormEvent } from "react";

type FormItem = {
  item: any,
  setItem: React.Dispatch<React.SetStateAction<any>>,
  inputType: string
};

type Props = {
  name: string,
  items: FormItem[],
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
};

export default function Form(props: Props) {
  const [formData, setFormData] = useState({ ...props.items });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value.trim(),
    });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.items.forEach((element, index) => {
      element.setItem(formData[index]);
    });
    props.setSubmitted(true);
  };

  console.log(formData);
  return (
    <div className="CVForm">
      <h1>{props.name}</h1>
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
    </div>
  );
}
