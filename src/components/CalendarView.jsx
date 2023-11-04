import React, { useState, useEffect } from 'react';
import {ConfigProvider, Calendar } from 'antd';
import "../App.css";
import DateCellRender from './DateCellRender';
import PreviewLeft from "../components/PreviewLeft";

const CalendarView = () => {
  const [ selectedDate, setSelectedDate] = useState(null);
  const [ selectedEvents, setSelectedEvents] = useState([]);
  
  useEffect(() => {
    console.log( selectedDate, selectedEvents);
  

  }, [ selectedDate, selectedEvents])  

  const getListData = (value) => {
    let listData;
    switch (value && value.date()) {
      case 8:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
          {
            type: 'error',
            content: 'This is error event.',
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event',
          },
          {
            type: 'success',
            content: 'This is very long usual event......',
          },
          {
            type: 'error',
            content: 'This is error event 1.',
          },
          {
            type: 'error',
            content: 'This is error event 2.',
          },
          {
            type: 'error',
            content: 'This is error event 3.',
          },
          {
            type: 'error',
            content: 'This is error event 4.',
          },
        ];
        break;
      default:
    }
    return listData || [];
  };
  
  const handleDateSelect = (date, info) => {
    if (info.source === 'date') {
      console.log('Selected Date:', date);
      console.log('Info:', info);
      const eventsForSelectedDate = getListData(date);      
      
      setSelectedDate(date);
      setSelectedEvents(eventsForSelectedDate);
    }

  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const monthCellRender = (value) => {
      const num = getMonthData(value);
      return num ? (
        <div className="notes-month">
          <section>{num}</section>
          <span>Backlog number</span>
        </div>
      ) : null;
  };
  
  const cellRender = (current, info) => {
      if (info.type === 'date') return <DateCellRender listData={getListData(current)} />;
      if (info.type === 'month') return monthCellRender(current);
      return info.originNode;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Calendar: {
            itemActiveBg: 'rgba(255,255,255, 0.3)',
            fullBg: 'rgba(255,255,255, 0.4)',
            fullPanelBg: 'rgba(255,255,255, 0.3)',
          },
          CalendarHeader: {
            background: 'rgba(255,255,255, 0.3)', // Fondo del encabezado del calendario
          },
          CalendarHeaderButton: {
            background: 'rgba(255,255,255, 0.3)', // Fondo de los botones del encabezado
          },
          CalendarHeaderSelect: {
            background: 'rgba(255,255,255, 0.3)', // Fondo del select del encabezado
          },
        },
      }}
    >
      <PreviewLeft selectedDate={selectedDate} selectedEvents={getListData(selectedDate)} />
      <Calendar cellRender={cellRender} onSelect={handleDateSelect} />
    </ConfigProvider>
  );
};

export default CalendarView;