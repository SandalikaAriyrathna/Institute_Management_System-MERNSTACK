import { useEffect, useState,useImperativeHandle } from 'react';
import axios from "axios";

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

const Piechart = ({chart}) => {

  const [show, setShow] = useState(false);
  const [month, setMonth] = useState("");
  const [totpayment, setTotpayment] = useState(0);
  const [curpayment, setCurpayment] = useState(0);
  const [monthly_fee, setMonthlyFee] = useState("");



  const labels = ['Paid', 'Unpaid']

  const [data, setData] = useState({
    labels,
    datasets: [{
      data: [curpayment, totpayment - curpayment],
      backgroundColor: [
        '#6610f2',
        'salmon',
      ]
    },
    ],

  });

  useEffect(() => {
    setData(
      {
        labels,
        datasets: [{
          data: [curpayment, totpayment - curpayment],
          backgroundColor: [
            '#6610f2',
            '#6495ED'
          ]
        },
        ],
      }
    )
  }, [curpayment, totpayment])

  useEffect(() => {

    chart.current = getdata
    getdata()


  }, [])

  const getdata = async () => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName = months[d.getMonth()];
    console.log(monthName)
    await axios.get(`http://localhost:5000/api/OnlineFeeses/countFees/${monthName}`)
      .then((res) => {
        console.log(res.data)
        setCurpayment(res.data)

      })
    await axios.get("http://localhost:5000/api/students/")
      .then(function (res) {
        let count = 0;
        res.data.forEach(i => {
          count += i.subjects.length;
          console.log(count)
        });
        setTotpayment(count)
      })
  }


  return (


  
      <Pie data={data} />
   
  );
}

export default Piechart;