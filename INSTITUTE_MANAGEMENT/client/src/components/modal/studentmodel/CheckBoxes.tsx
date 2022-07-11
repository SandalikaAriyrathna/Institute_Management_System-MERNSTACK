import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false, false]);

  const [subjects , setSubjects] = useState([]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([ checked[0], checked[1], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Science"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        value="Science"
       
      />
      <FormControlLabel
        label="Mathematics"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        value="Mathematics"
      />
       <FormControlLabel
        label="Sinhala"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
        value="Sinhala"
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="All Subjects"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2] }
            onChange={handleChange1}
           
          />
        }
      />
      {children}
    </div>
  );
}
