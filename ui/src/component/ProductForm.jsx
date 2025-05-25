import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useProductStore from '../store/useProduct';
const cateGory = ["bages", "dresses", "jeans"];

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    descripation: "",
    price: "",
    image: "",
    category: "",
  });

  const { createProduct } = useProductStore()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    }));

  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
      console.log("Base64 Image:", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    createProduct(formData)
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="descripation"
        placeholder="Description"
        value={formData.descripation}
        onChange={handleInputChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImage}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      >
        <option value="">Select a category</option>
        {cateGory.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProductForm;
