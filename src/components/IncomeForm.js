import React, { useRef, useState } from 'react';



function IncomeForm({ income, setIncome }) {

  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const category = useRef(null);
  const [error, setError] = useState('');

  const AddIncome = (e) => {
    e.preventDefault();

    if (!desc.current.value || !price.current.value || !date.current.value || !category.current.value) {
      setError('Please fill in all fields');
      return;
    }

    let d = date.current.value.split('-');
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
        category: category.current.value,
      },
    ]);

    desc.current.value = '';
    price.current.value = null;
    date.current.value = null;
    category.current.value = '';
    setError('');
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" name="desc" id="desc" placeholder="Enter Description..." ref={desc} />
        <input type="number" name="price" id="price" placeholder="Price..." ref={price} />
        <input type="date" name="date" id="date" placeholder="Select date..." ref={date} />
        <select name="category" id="category" ref={category}>
          <option value="">Select Category...</option>
          <option value="salary">Salary</option>
          <option value="freelance">Freelance</option>
          <option value="bonus">Bonus</option>
          { }
        </select>
        <input type="submit" value="Add Income" />
      </div>
      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
    </form>
  );
}

export default IncomeForm;