import { useState } from "react";
import { GenderButton } from "./GenderButton";

export const GenderMenu = () => {
    const [activeGender, setActiveGender] = useState<string>('Femei'); 
  
    const handleGenderClick = (gender: string) => {
      setActiveGender(gender);
    };
  
    return (
      <div className="ml-2">
        <GenderButton
          gender="Femei"
          isActive={activeGender === 'Femei'}
          onClick={() => handleGenderClick('Femei')}
        />
        <GenderButton
          gender="Barbati"
          isActive={activeGender === 'Barbati'}
          onClick={() => handleGenderClick('Barbati')}
        />
        <GenderButton
          gender="Copii"
          isActive={activeGender === 'Copii'}
          onClick={() => handleGenderClick('Copii')}
        />
      </div>
    );
  };