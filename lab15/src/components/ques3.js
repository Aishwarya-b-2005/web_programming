import React from "react";

function StyledButton() {
    return (
        <div>
            <style>
                {`
                    .custom-button {
                        background-color: #ff6b81;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        border-radius: 5px;
                        transition: background-color 0.3s ease;
                    }
                    
                    .custom-button:hover {
                        background-color: #ff4757;
                    }
                `}
            </style>

            <button className="custom-button">Click Me</button>
        </div>
    );
}

export default StyledButton;
