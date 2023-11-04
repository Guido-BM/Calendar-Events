import React from "react";
import CreateEventButton from "./CreateEventButton";
import DateCellRender from "./DateCellRender";

const PreviewLeft = ({ selectedDate, selectedEvents }) => {
  return (
    <>
      <div id="PreviewLeftContainer">
        <h1>THIS DAY:</h1>
        <div id="numberOfDayToPreview">
          {selectedDate ? selectedDate.format("D") : ""}
        </div>
        <DateCellRender listData={selectedEvents} />
        <CreateEventButton />
      </div>
    </>
  );
};

export default PreviewLeft;
