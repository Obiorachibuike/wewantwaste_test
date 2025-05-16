import React, { useEffect, useState } from 'react';
import SkipCard from './SkipCard';
import axios from "axios";
import data from "../data/data.ts";
import '../styles/SkipGrid.css';

interface SkipGridProps {
  nextPage: (currentStep: number) => void;
}

interface SkipData {
  id: number;
  size: number;
  title?: string;
  price_before_vat: number;
  hire_period_days: number;
  forbidden: boolean;
  image?: string;
}

const SkipGrid: React.FC<SkipGridProps> = ({ nextPage }) => {
  const [skips, setSkips] = useState<SkipData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<{ size: string; price_before_vat: number; hire_period_days: number } | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        setSkips(response.data);
      } catch (error) {
        console.error("Fetch failed:", error);
        setError("Failed to fetch skips. Showing local data.");
        setSkips(data); // fallback
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleSelect = (skip: SkipData) => {
    if (selectedSkipId === skip.id) {
      setSelectedSkipId(null);
      setSelectedSkip(null);
    } else {
      setSelectedSkipId(skip.id);
      setSelectedSkip({
        size: skip.size.toString(),
        price_before_vat: skip.price_before_vat,
        hire_period_days: skip.hire_period_days,
      });
    }
  };

  const handleBack = () => {
    setSelectedSkipId(null);
    setSelectedSkip(null);
  };

  return (
    <>
      <div className="skip-card-container">
        <div className="skip-grid-wrapper">
          <h1 className="skip-grid-heading">Choose Your Skip Size</h1>
          <p className="skip-grid-subheading">Select the skip size that best suits your needs</p>

          {loading ? (
            <p className="loading-message">Loading skips...</p>
          ) : error ? (
            <div className="error-message">
              <p>{error}</p>
            </div>
          ) : (
            <div className="skip-card-cont">
              {skips.map((skipItem) => (
                <SkipCard
                  key={skipItem.id}
                  content={skipItem}
                  selectedSkipId={selectedSkipId}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedSkip && (
        <div className="skip-bottom-modal">
          <div className="skip-bottom">
            <div className="skip-modal-left">
              <strong>{selectedSkip.size} Yard Skip</strong>
              <p>
                <span className="skip-card-price modal_price">£{selectedSkip.price_before_vat}</span>
                <span className="modal_period"> {selectedSkip.hire_period_days} days</span>
              </p>
            </div>
            <div className="skip-modal-right">
              <button className="btn-back" onClick={handleBack}>Back</button>
              <button className="btn-continue" onClick={() => nextPage(4)}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkipGrid;