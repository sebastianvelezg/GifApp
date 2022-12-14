import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // setCategories([...categories, "The Big Bang Theory"]);
    // setCategories((cat) => ["The Big Bang Theory", ...cat]);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
