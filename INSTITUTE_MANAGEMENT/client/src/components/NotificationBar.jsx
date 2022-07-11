
import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import BellIcon from 'react-bell-icon';



export default function NotificationBar(props) {

  // const [messageCount, setMessageCount] = useState(0);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  // const [raedIndex, setReadIndex] = useState(0);

  const handleClick = (event) => {
    setShow(!show);
    // setTarget(event.target);
}

  [
    {
      "update":"You haven’t completed your class fees payment yet.",
      "timestamp":1596119688264
    },
    {
      "update": "Your class fees payment should be done by next week",
      "timestamp":1596119686811
    }
 ]
 
//   useEffect(() => {
//     if (!sortedByKey) {
//         data.sort((a, b) => b[key] - a[key]);
//     }

//     let readItemLs = reactLocalStorage.getObject(storageKey);
//     let readMsgId = Object.keys(readItemLs).length > 0 ? readItemLs['id'] : '';

//     let readIndex = (readMsgId === '') ? data.length : 
//                        data.findIndex(
//                            elem => 
//                                elem[key] === readMsgId);


//     readIndex === -1 ? readIndex = data.length : readIndex;
//     setReadIndex(readIndex);

//     (data.length && readIndex) > 0 ? 
//         setShowCount(true) : setShowCount(false);
//     setMessageCount(readIndex);

// }, [data]);


  return (
    <>
       {/* <NotifyMe
            // data={data}
            storageKey='notific_key'
            notific_key='timestamp'
            notific_value='update'
            heading='Notification Alerts'
            sortedByKey={false}
            showDate={true}
            size={64}
            color="yellow"
            /> */}
      
         
    
                      
    
      <div className="notification-container">
    {/* <div className = 
              {
                 showCount ? 
                   'notification notify show-count' : 
                       'notification notify'
               }
           data-count={messageCount}
            onClick={event => handleClick(event)}> */}
                 <BellIcon width='30' active={true} animate={true} color='yellow'  onClick={event => handleClick(event)}/> 
                 {/* </div> */}
</div>
    </>
  );
}