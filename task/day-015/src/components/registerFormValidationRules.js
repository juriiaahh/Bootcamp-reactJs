export default function validateRegister(values){
    let errors = {};
        if (!values.name) {
            errors.name = 'name is required';
        }

        if (!values.email) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be 8 or more characters';
        }

        if (!values.number) {
            errors.number = 'No.Hp is required';
        } else if (values.number.length <= 12 ) {
            errors.number = 'No.hp must be 12 or more characters';
        }
        if (!values.alamat) {
            errors.alamat = 'alamat is required';
        }

      return errors;
    }; 