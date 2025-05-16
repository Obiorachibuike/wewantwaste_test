import "../styles/SkipCard.css";
import React from "react";

interface SkipCardProps {
  content: {
    id: number;
    size: number;
    title?: string;
    price_before_vat: number;
    hire_period_days: number;
    forbidden?: boolean;
    image?: string;
  };
  selectedSkipId: number | null;
  onSelect: (skip: {
    id: number;
    size: number;
    price_before_vat: number;
    hire_period_days: number;
  }) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  content,
  onSelect,
  selectedSkipId,
}) => {
  const {
    id,
    size,
    title,
    price_before_vat,
    hire_period_days,
    forbidden,
    image,
  } = content;

  const isSelected = selectedSkipId === id;

  return (
    <div className={`skip-card ${isSelected ? "selected" : ""}`}>
      <div className="skip-card-image-container">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="skip-card-image"
        />
        <span className="skip-card-badge">{size} Yards</span>
        {!forbidden && (
          <div className="skip-card-warning">
            <span className="material-icons skip-card-warning-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </span>
            Not Allowed On The Road
          </div>
        )}
      </div>
      <div className="skip-card-content">
        <h2 className="skip-card-title">{size} Yard Skip</h2>
        <p className="skip-card-hire-period">
          {hire_period_days} days hire period
        </p>
        <p className="skip-card-price">£{price_before_vat}</p>
      </div>
      <div className="skip-card-footer">
        <button
          className={`skip-card-button ${isSelected ? "selected" : ""}`}
          onClick={() =>
            onSelect({ id, size, price_before_vat, hire_period_days })
          }
        >
          {isSelected ? "Selected" : "Select This Skip →"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
