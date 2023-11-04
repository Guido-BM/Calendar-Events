import React from "react";
import CreateEventButton from "./CreateEventButton";
import DateCellRender from "./DateCellRender";
import { Typography } from "antd"; // Importa el componente Typography

const { Title } = Typography; // Obtén el componente Title de Typography

const PreviewLeft = ({ selectedDate, selectedEvents, addEvents }) => {

  return (
    <>
      <div id="PreviewLeftContainer">
        <Title level={4}>DAY OF THE WEEK:</Title>
        <div id="dayOfWeek">
         <h1> {selectedDate ? selectedDate.format("dddd") : ""}</h1>
        </div>
        <div id="numberOfDayToPreview">
          {selectedDate ? selectedDate.format("D") : ""}
        </div>

        <DateCellRender listData={selectedEvents} />
        <CreateEventButton  addEvents={addEvents} selectedDate={selectedDate ? selectedDate.format("D-MMM") : ""}/>
      </div>
    </>
  );
};

export default PreviewLeft;
