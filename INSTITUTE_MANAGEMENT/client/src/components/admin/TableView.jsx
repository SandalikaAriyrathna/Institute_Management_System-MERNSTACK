import React from "react";

import ReactTable from "react-table";

import { Input } from "reactstrap";

// Im doing this example with people data + "site"
const initialData = [
  {
    name: "Kate",
    age: 22,
    site: "facebook"
  },
  {
    name: "John",
    age: 28,
    site: "facebook"
  },
  {
    name: "Jose",
    age: 33,
    site: "twitter"
  }
];
export class FeesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalData: [],
      filteredData: []
    };
  }

  // Here I simulate data fetch
  componentDidMount() {
    this.setState({
      originalData: initialData,
      filteredData: initialData
    });
  }

  handleSelectedSite(site) {
    console.log(site);
    // Here I make a copy of the original data using json.stringify
    // so it doesn't mutate the original state
    let aux = JSON.parse(JSON.stringify(this.state.originalData));

    // If it doesn't select a site we do nothing, data unfiltered
    if (site !== "") {
      aux = aux.filter(row => row.site === site);
    }

    this.setState({
      filteredData: aux
    });
  }

  render() {
    return (
      <div className="App">
        <Input
          type="select"
          id="vesselName"
          onChange={e => this.handleSelectedSite(e.target.value)}
        >
          <option />
          <option>facebook</option>
          <option>twitter</option>
        </Input>
        <ReactTable
          style={{ marginTop: "10px" }}
          data={this.state.filteredData}
          
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Site",
              accessor: "site"
            }
          ]}
        />
      </div>
    );
  }
}






















// import React from "react";
// import ReactTable from "react-table";
// import { Input } from "reactstrap";
// import {useState, useEffect} from "react";

// // Im doing this example with people data + "site"
// const initialData = [
//   {
//     name: "Kate",
//     age: 22,
//     site: "facebook"
//   },
//   {
//     name: "John",
//     age: 28,
//     site: "facebook"
//   },
//   {
//     name: "Jose",
//     age: 33,
//     site: "twitter"
//   }
// ];
// export default function FeesTable(props){

//     const [originalData, setOriginalData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);

  
 
//   const componentDidMount =  () => {
//     setOriginalData(initialData);
//     setFilteredData(initialData);
//   }
  
//   useEffect(() => {
    
//     componentDidMount();
    
//   }, []);

    

//       const handleSelectedSite = async (site)=> {    
//         console.log(site);      
//         const aux = JSON.parse(JSON.stringify(setOriginalData));  
       
//         if (site !== "") {
//           aux = aux.filter(row => row.site === site);
//         }
//         setFilteredData(site.data['aux'])
    
//       }


//     return (
//     <>
//         <Input
//           type="select"
//           id="vesselName"
//           onChange={(e) => handleSelectedSite(e.target.value)}
          
//         >
//           <option />
//           <option>facebook</option>
//           <option>twitter</option>
//         </Input>
//         <ReactTable
//           style={{ marginTop: "10px" }}
//           data={setFilteredData}
         
//           columns={[
//             {
//               Header: "Name",
//               accessor: "name"
//             },
//             {
//               Header: "Age",
//               accessor: "age"
//             },
//             {
//               Header: "Site",
//               accessor: "site"
//             }
//           ]}
//         />
//      </>
//     );
  
// }
