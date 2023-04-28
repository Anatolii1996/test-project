import { useState, useEffect } from "react";
import { Select, DebounceSelect } from "antd";
import { Space, Input } from "antd";
import AutocompleteWrap from "./autocomplete";

const SearchWrap = ({ data, statuses, country, setClonDataArr, clonDataArr, dataArr }) => {
  const userNames = [];
  data.map((el) => {
    if (!userNames.includes(el.customerName)) {
      userNames.push(el.customerName);
    }
  });

  const companyName = [];
  data.map((el) => {
    if (!companyName.includes(el.company)) {
      companyName.push(el.company);
    }
  });
  const phoneNumbers =[];
   data.map((el) => {
    if (!phoneNumbers.includes(el.phoneNumber)) {
      phoneNumbers.push(el.phoneNumber);
    }
  });
  
  const emails =[];
   data.map((el) => {
    if (!emails.includes(el.email)) {
      emails.push(el.email);
    }
  });
 
  return (
    <AutocompleteWrap
      userNames={userNames}
      companyName={companyName}
      phoneNumbers={phoneNumbers}
      statuses={statuses}
      country={country}
      setClonDataArr={setClonDataArr}
      clonDataArr={clonDataArr}
      dataArr={dataArr}
      emails={emails}

    />
  );
};
export default SearchWrap;
