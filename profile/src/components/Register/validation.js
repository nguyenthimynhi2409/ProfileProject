import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
var phone_regex = /((09|03|07|08|05)+([0-9]{9})\b)/g;
var email_regex =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const validatePassword = (password,confirmPassword) => {
    if (password.length < 8) toast("Password must be at least 8 characters");
    if (password !== confirmPassword)
      toast("Password and confirm password does not match");
    // if (phone_regex.test(phone) == false) toast("Please check your phone");
    // if (email_regex.test(email) == false) toast("Please check your email");
    // if (gender === "") toast("Please choose your gender");
    // if (age <= 0) toast("Please check your age");
};
