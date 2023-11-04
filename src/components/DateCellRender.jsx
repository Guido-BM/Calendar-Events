import React from 'react';
import {Badge} from 'antd';
import "../App.css"

const DateCellRender = ({listData= []}) => {
    // const listData = getListData(value);
    
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.date}>
            <Badge status={item.modifier} text={item.title} />
          </li>
        ))}
      </ul>
    );
};
export default DateCellRender;