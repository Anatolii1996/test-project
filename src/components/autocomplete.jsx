import { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const AutocompleteWrap = ({
  userNames,
  companyName,
  phoneNumbers,
  statuses,
  country,
  setClonDataArr,
  clonDataArr,
  dataArr,
  emails,
}) => {
  const [selectValue, setSelectValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    if (selectValue) {
      if (userNames.includes(selectValue)) {
        setClonDataArr(
          clonDataArr.filter((el) => el.customerName == selectValue)
        );
      } else if (companyName.includes(selectValue)) {
        setClonDataArr(clonDataArr.filter((el) => el.company == selectValue));
      } else if (phoneNumbers.includes(selectValue)) {
        setClonDataArr(
          clonDataArr.filter((el) => el.phoneNumber == selectValue)
        );
      } else if (statuses.includes(selectValue)) {
        setClonDataArr(clonDataArr.filter((el) => el.status == selectValue));
      } else if (country.includes(selectValue)) {
        setClonDataArr(clonDataArr.filter((el) => el.country == selectValue));
      } else if (emails.includes(selectValue)) {
        setClonDataArr(clonDataArr.filter((el) => el.email == selectValue));
      }
    }
  }, [selectValue]);

  useEffect(() => {
    if (currentValue == "") {
      setClonDataArr(dataArr.concat());
    }
  }, [currentValue]);

  const changeData = (arr) => {
    return [
      ...arr.map((el) => {
        return {
          label: el,
          value: el,
        };
      }),
    ];
  };

  const optionsName = changeData(userNames);
  const optionsCompany = changeData(companyName);
  const optionsPhone = changeData(phoneNumbers);
  const optionsStatus = changeData(statuses);
  const optionsCountry = changeData(country);
  const optionsEmail = changeData(emails);

  const allData = [
    ...optionsName,
    ...optionsCompany,
    ...optionsPhone,
    ...optionsStatus,
    ...optionsCountry,
    ...optionsEmail,
  ];

  return (
    <div className="select_wrap">
      <SearchOutlined style={{padding:10, fontSize:20}} />
      <AutoComplete
      style={{ width: 200}}
      filterOption={true}
      placeholder="Search"
      options={allData}
      onChange={(value) => {
        setCurrentValue(value);
      }}
      onSelect={(value) => {
        setSelectValue(value);
        setCurrentValue(value);
      }}
    />
    </div>
    
  );
};
export default AutocompleteWrap;
