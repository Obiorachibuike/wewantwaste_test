import React, { useEffect, useState } from 'react';
import SkipCard from './SkipCard';
import axios from "axios"
import data from "../data/data.ts"
import '../styles/SkipGrid.css'; // Your custom CSS file



interface SkipGridProps {
  nextPage: (currentStep: number) => void;
}

interface SkipData {
  size: number;
  title: string;
  image: string;
  price: number;
  hirePeriod: string;
  roadAllowed: boolean;
}

const SkipGrid: React.FC<SkipGridProps> = ({ nextPage }) => {
  const [skips, setSkips] = useState<SkipData[]>([]);
   const [selectedSkip, setSelectedSkip] = useState<{size: string; price_before_vat: number,hire_period_days:number} | null>(null);
 const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);


   
useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
      
      setSkips(response.data);
      console.log("Fetched skips:", response.data);
    } catch (error) {
      console.error("Fetch failed:", error);
      setSkips(data); // fallback to local
    }
  };

  getData();
}, []);

const handleSelect = (skip: {
  id: number;
  size: number;
  price_before_vat: number;
  hire_period_days: number;
}) => {
  if (selectedSkipId === skip.id) {
    // If the selected skip is clicked again, unselect it
    setSelectedSkipId(null);
    setSelectedSkip(null);
  } else {
    // Otherwise, select it
    setSelectedSkipId(skip.id);
    setSelectedSkip({
      size: skip.size.toString(), // assuming your interface expects size as string
      price_before_vat: skip.price_before_vat,
      hire_period_days: skip.hire_period_days,
    });
  }
};

const handleBack = () => {
    setSelectedSkipId(null);
    setSelectedSkip(null)
  };

  return (
    <>
    <div className="skip-card-container">
  <div className="skip-grid-wrapper">
    <h1 className="skip-grid-heading">Choose Your Skip Size</h1>
    <p className="skip-grid-subheading">Select the skip size that best suits your needs</p>
    <div className="skip-card-cont">
      {/* {console.log(skips)} */}
      {skips.map((skipItem, idx) => (
         <SkipCard
          key={skipItem.id}
          content={skipItem}
          selectedSkipId={selectedSkipId}
          onSelect={handleSelect}
        />
    // <SkipCard key={idx} {...skip} />
  ))}
    </div>
  </div>
</div>

    {selectedSkip && (
        <div className="skip-bottom-modal">
        <div className="skip-bottom">
          <div className="skip-modal-left">
            <strong>{selectedSkip.size} Yard Skip</strong>
            <p>
              <span className="skip-card-price modal_price">£{selectedSkip.price_before_vat}</span>    
                 <span className="modal_period"> {selectedSkip.hire_period_days} days</span></p>
          </div>
          <div className="skip-modal-right">
            <button className="btn-back" onClick={handleBack}>Back</button>
            <button className="btn-continue" onClick={() => {nextPage(4)}}>Continue</button>
          </div>
        </div>
        </div>
      )}  
      </>

  );
};

export default SkipGrid;
