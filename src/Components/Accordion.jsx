import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          
          <button onClick={() => handleToggle(index)}>
            {item.title}
          </button>

          {activeIndex === index && (
            <div>
              <p>{item.content}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default Accordion;