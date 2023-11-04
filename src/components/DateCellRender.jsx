import React from 'react';
import {Badge} from 'antd';
import "../App.css"

const DateCellRender = ({listData= []}) => {
    // const listData = getListData(value);
    
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
};
export default DateCellRender;