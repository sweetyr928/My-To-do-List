import { useState } from 'react';
import Calendar from 'react-calendar';
import './SideCalender.css';

const SideCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calContainer'>
      <Calendar className="react-calendar" onChange={onChange} value={value} />
    </div>
  );
}

export default SideCalendar;