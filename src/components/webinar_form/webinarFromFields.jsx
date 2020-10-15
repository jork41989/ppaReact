import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { FormControl, Select } from "@material-ui/core";

export default function WebinarFormFeilds({changer, submitter, stateAbr, formErrors}) {


  return (
    <form name="register" id="registerForm" onSubmit={submitter}>
      <div className="formTop">
        <TextField type="text" name="first_name" id="firstName" placeholder="First Name" onChange={changer}  />
        <TextField type="text" name="last_name" id="lastName" placeholder="Last Name" onChange={changer} />
        <Input type="email" name="email" id="email" placeholder="Email" onChange={changer} error={formErrors.email}/>
        <Input type="tel" name="phone" id="phone" placeholder="Phone Number" onChange={changer} error={formErrors.phone}/>

      </div>
      <div className="addressDiv">
        <Input type="text" name="address" id="address" placeholder="Address" classes={{ root: "address" }} onChange={changer} />
      </div>
      <div className="formMid">

        <TextField type="text" name="city" id="city" placeholder="City" onChange={changer} />
        <FormControl id="stateControler" >
          <Select type="text" name="state" id="state" placeholder="State" onChange={stateAbr} error={formErrors.state}  >
            <MenuItem value={"AL"}>AL</MenuItem>
            <MenuItem value={"AK"}>AK</MenuItem>
            <MenuItem value={"AZ"}>AZ</MenuItem>
            <MenuItem value={"AR"}>AR</MenuItem>
            <MenuItem value={"CA"}>CA</MenuItem>
            <MenuItem value={"CO"}>CO</MenuItem>
            <MenuItem value={"CT"}>CT</MenuItem>
            <MenuItem value={"DE"}>DE</MenuItem>
            <MenuItem value={"DC"}>DC</MenuItem>
            <MenuItem value={"FL"}>FL</MenuItem>
            <MenuItem value={"GA"}>GA</MenuItem>
            <MenuItem value={"HI"}>HI</MenuItem>
            <MenuItem value={"ID"}>ID</MenuItem>
            <MenuItem value={"IL"}>IL</MenuItem>
            <MenuItem value={"IN"}>IN</MenuItem>
            <MenuItem value={"IA"}>IA</MenuItem>
            <MenuItem value={"KS"}>KS</MenuItem>
            <MenuItem value={"KY"}>KY</MenuItem>
            <MenuItem value={"LA"}>LA</MenuItem>
            <MenuItem value={"ME"}>ME</MenuItem>
            <MenuItem value={"MD"}>MD</MenuItem>
            <MenuItem value={"MA"}>MA</MenuItem>
            <MenuItem value={"MI"}>MI</MenuItem>
            <MenuItem value={"MN"}>MN</MenuItem>
            <MenuItem value={"MS"}>MS</MenuItem>
            <MenuItem value={"MO"}>MO</MenuItem>
            <MenuItem value={"MT"}>MT</MenuItem>
            <MenuItem value={"NE"}>NE</MenuItem>
            <MenuItem value={"NV"}>NV</MenuItem>
            <MenuItem value={"NH"}>NH</MenuItem>
            <MenuItem value={"NJ"}>NJ</MenuItem>
            <MenuItem value={"NM"}>NM</MenuItem>
            <MenuItem value={"NY"}>NY</MenuItem>
            <MenuItem value={"NC"}>NC</MenuItem>
            <MenuItem value={"ND"}>ND</MenuItem>
            <MenuItem value={"OH"}>OH</MenuItem>
            <MenuItem value={"OK"}>OK</MenuItem>
            <MenuItem value={"OR"}>OR</MenuItem>
            <MenuItem value={"PA"}>PA</MenuItem>
            <MenuItem value={"RI"}>RI</MenuItem>
            <MenuItem value={"SC"}>SC</MenuItem>
            <MenuItem value={"SD"}>SD</MenuItem>
            <MenuItem value={"TN"}>TN</MenuItem>
            <MenuItem value={"TX"}>TX</MenuItem>
            <MenuItem value={"UT"}>UT</MenuItem>
            <MenuItem value={"VT"}>VT</MenuItem>
            <MenuItem value={"VA"}>VA</MenuItem>
            <MenuItem value={"WA"}>WA</MenuItem>
            <MenuItem value={"WV"}>WV</MenuItem>
            <MenuItem value={"WI"}>WI</MenuItem>
            <MenuItem value={"WY"}>WY</MenuItem>
          </Select>
        </FormControl>
        <FormControl id="zipControler">
          <Input type="number" name="zip" id="zipcode" placeholder="Zipcode" onChange={changer} error={formErrors.zip} />
        </FormControl>
      </div>

      <Input type="submit" value="Register" />
    </form>
  )
}