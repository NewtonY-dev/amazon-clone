import React from "react";
import categoryInfos from "./categoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => {
      return  <CategoryCard key={infos.name} data={infos} />;
      })}
    </section>
  );
}

export default Category;
