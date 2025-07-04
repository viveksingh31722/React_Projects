import { use, useState } from "react";
import data from "./data";
import "./style.css";

// This is a simple Accordion component
function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.heading}</h3>
                <span>+</span>
                <div className="content">
                  {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                    <div>{dataItem.content}</div>
                  ) : null} */}

                  {
                    enableMultiSelection ? 
                     multiple.indexOf(dataItem.id) !== -1 && (<div>{dataItem.content}</div>) : 
                     selected === dataItem.id && (<div>{dataItem.content}</div>)
                  }

                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
