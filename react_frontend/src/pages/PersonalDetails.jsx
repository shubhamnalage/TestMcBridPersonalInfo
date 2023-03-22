import { Steps } from "antd";
import { useState, useEffect } from "react";
import ContactDetailsForm from "../components/ContactDetailsFrom";
import swal from "sweetalert";
import PersonalDetailsForm from "../components/PersonalDetailsForm";
import AddressForm from "../components/AddressForm";
import axios from "axios";

const PersonalDetails = () => {
  const [current, setCurrent] = useState(0);
  const [personalDetails, setPersonalDetails] = useState(null);
  const [contactDetails, setContactDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);
  const [formDetails, setFormDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Ip, setIp] = useState();
  const [device, setDevice] = useState();
  const [browser, setBrowser] = useState();

  const getIp = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
      console.log("This is an iOS device");
      setDevice("iOS");
    } else if (userAgent.match(/Android/i)) {
      console.log("This is an Android device");
      setDevice("Android");
    } else {
      console.log("This is some other type of device");
      setDevice("Other");
    }

    if (userAgent.indexOf("Chrome") > -1) {
      setBrowser("Google Chrome");
    } else if (userAgent.indexOf("Firefox") > -1) {
      setBrowser("Mozilla Firefox");
    } else if (userAgent.indexOf("Safari") > -1) {
      setBrowser("Safari");
    } else if (userAgent.indexOf("Opera") > -1) {
      setBrowser("Opera");
    } else if (userAgent.indexOf("Edge") > -1) {
      setBrowser("Opera");
    } else if (
      userAgent.indexOf("MSIE") > -1 ||
      userAgent.indexOf("Trident/") > -1
    ) {
      console.log("This is Internet Explorer");
      setBrowser("Internet Explorer");
    } else {
      setBrowser("Other Browser");
    }

    axios
      .get("https://geolocation-db.com/json/")
      .then((response) => {
        const ip = response.data.IPv4;
        setIp(ip);
        console.log(ip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishPersonDetails = (values) => {
    console.log("onFinishPersonDetails", values);
    setPersonalDetails(values);
    setCurrent(1);
  };
 
  const onFinishContactDetails = (values) => {
    setContactDetails(values);
    setCurrent(2);
  };

  const onFinishAddressDetails = (values) => {
    console.log("onFinishPersonDetails", values);
    setAddressDetails(values);
    const combinedFormData = {
      ...personalDetails,
      ...contactDetails,
      ...values,
      Ip,
      device,
      browser,
    };
    setFormDetails(combinedFormData);
    console.log("combinedFormData",combinedFormData);
    setCurrent(2);
    axios
      .post("http://localhost:8000/api/personalDetails", combinedFormData)
      .then((response) => {
        console.log(response);
        if (response.data === "user Already exist") {
          swal({
            title: "Email is already exist",
            icon: "error",
          });
          setLoading(true);
        } else {
          swal({
            title: "Good job!",
            text: "Successfully Added Information!",
            icon: "success",
          });
          setLoading(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    swal({
      title: "Good job!",
      text: "Successfully Added Information!",
      icon: "success",
    });
    setCurrent(3);
  };

  const forms = [
    <PersonalDetailsForm
      onFinish={onFinishPersonDetails}
      initialValues={personalDetails}
    />,
    <ContactDetailsForm
      onFinish={onFinishContactDetails}
      initialValues={contactDetails}
    />,
    <AddressForm
      onFinish={onFinishAddressDetails}
      initialValues={addressDetails}
    />,
    // <FinishForm />,
  ];
  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    }
    if (stepNumber === 1) {
      return personalDetails === null;
    }
    if (stepNumber === 2) {
      return personalDetails === null || contactDetails === null;
    }
    if (stepNumber === 3) {
      return personalDetails === null || contactDetails === null;
    }
  };
  useEffect(() => {
    getIp();
  }, []);
  return (
    <div>
      <Steps
        style={{ padding: "32px 16px" }}
        onChange={setCurrent}
        current={current}
      >
        <Steps.Step disabled={isStepDisabled(0)} title="Personal Details" />
        <Steps.Step disabled={isStepDisabled(1)} title="Contact Details" />
        <Steps.Step disabled={isStepDisabled(2)} title="Address" />
      </Steps>
      {forms[current]}
    </div>
  );
};
export default PersonalDetails;
