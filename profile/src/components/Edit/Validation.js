import "react-toastify/dist/ReactToastify.css";

export const emailValidator = (control) => {

    let email_regex = (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    if (email_regex.test(control)) {
      return null;
    } else {
      return 'Email không đúng.';
    }
  }


  export const numberValidator = (control) => {
    let phone_regex = (/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/);
    if (phone_regex.test(control)) {
      return "";
    } else {
      return 'Bạn phải nhập số.';
    }
  }



  export const requireValue = (control) => {
    let require_regex = (/^[A-Za-z]+$/i );
    if (require_regex.test(control) || control !== '' ) {
      return null;
    } else {
      return 'Chưa nhập thông tin.';
    }
  }    

  export const requireUncontainNumber = (control) => {
    let require_regex = (/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/);
    if (require_regex.test(control) === true ) {
      return 'Không được chứa số.';
    } else {
      return null;
    }
  } 