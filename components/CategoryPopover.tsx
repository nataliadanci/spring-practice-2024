import React from "react";
import { ReactNode } from "react";
import { TextListWithAnimation } from "./TextListWithAnimation";
import { CategoryWithPopover } from "./CategoryWithPopover";
import { categoryItems } from "./Constants";

export const Categories: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="category-container bg-white flex justify-between items-center">
      <div className="flex relative">
        {categoryItems.map((category, index) => {
          return (
            <CategoryWithPopover
              key={`${category.categoryName}-${index}`}
              categoryName={category.categoryName}
            >
              <div className="flex justify-start">
                {category.subCategories.map((subCategory, index) => {
                  return (
                    <div key={`${subCategory.subCategoryTitle}-${index}`}>
                      {subCategory.elements.length > 0 && (
                        <TextListWithAnimation
                          subtitle={subCategory.subCategoryTitle}
                          textLinks={subCategory.elements}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </CategoryWithPopover>
          );
        })}
      </div>
      {children}
    </div>
  );
};
