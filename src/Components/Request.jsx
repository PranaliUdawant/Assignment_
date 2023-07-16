import React from 'react';
import Input from '../commonComponent/Input';

function Request() {
  const inputFieldObj = [
    {
      label: "First Name",
      placeholder: "John"
    },
    {
      label: "Last Name",
      placeholder: "Doe"
    },
    {
      label: "Email",
      placeholder: "john@gmail.com"
    },
    {
      label: "Phone no.",
      placeholder: "8888888888"
    },
    {
      label: "Organisation Name",
      placeholder: "ABC Company",
      width: 580
    },
    {
      label: "Solution and services",
      placeholder: "Service-1",
      width:580
    },
    {
      label: "Partner Type",
      placeholder: "Type-1" ,
      width:580
    },
    {
      label: "Address",
      placeholder: "Pune, MH",
      width:580
    }
  ];

  return (
    <div className='p-12'>
      <div className="p-12" style={{backgroundColor:"white"}}>
        <div className="p-16">
          <p className="text-4xl">Request For Demo</p>
          <div className="flex justify-between mt-16 mb-6">
            {inputFieldObj.slice(0, 4).map((item, index) => (
              <React.Fragment key={index}>
                <Input {...item} />
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mb-6">
            {inputFieldObj.slice(4, 6).map((item, index) => (
              <React.Fragment key={index}>
                <Input {...item} />
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mb-6">
            {inputFieldObj.slice(6, 8).map((item, index) => (
              <React.Fragment key={index}>
                <Input {...item} />
              </React.Fragment>
            ))}
          </div>
          <button class="button-40" role="button">Request a Demo</button>
        </div>
      </div>
    </div>
  );
}

export default Request;
