// // // frontend/src/components/Register.js
// // import React, { Component } from 'react';
// // import { withRouter } from 'react-router-dom';
// // import axios from 'axios';

// // class Register extends Component {
// //   state = {
// //     username: '',
// //     password: '',
// //   };

// //   handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     this.setState({ [name]: value });
// //   };

// //   handleRegister = async (e) => {
// //     e.preventDefault();
// //     const { username, password } = this.state;
// //     try {
// //       await axios.post('/register', { username, password });
// //       this.props.history.push('/login');
// //     } catch (error) {
// //       console.error('Registration failed:', error.message);
// //     }
// //   };

// //   render() {
// //     const { username, password } = this.state;
// //     return (
// //       <div>
// //         <h2>Register</h2>
// //         <form onSubmit={this.handleRegister}>
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={username}
// //             onChange={this.handleInputChange}
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={this.handleInputChange}
// //           />
// //           <button type="submit">Register</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default withRouter(Register);




// import React from "react";
// // import "../styles/RegiserStyles.css";
// // import { Form, Input, message } from "antd";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// const Register = () => {
//   const navigate = useNavigate();

//   //form handler
//   const onfinishHandler = async (values) => {
//     try {
//       const res = await axios.post("/api/v1/user/register", values);
//       if (res.data.success) {
//         message.success("Register Successfully!");
//         navigate("/login");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       message.error("Something Went Wrong");
//     }
//   };
//   return (
//     <>
//       <div className="form-container ">
//         <Form
//           layout="vertical"
//           onFinish={onfinishHandler}
//           className="register-form"
//         >
//           <h3 className="text-center">Register From</h3>
//           <Form.Item label="Name" name="name">
//             <Input type="text" required />
//           </Form.Item>
//           <Form.Item label="Email" name="email">
//             <Input type="email" required />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input type="password" required />
//           </Form.Item>
//           <Link to="/login" className="m-2">
//             Already user login here
//           </Link>
//           <button className="btn btn-primary" type="submit">
//             Register
//           </button>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default Register;



import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  // Form handler
  onfinishHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    try {
      const res = await axios.post("/api/v1/user/register", {
        name,
        email,
        password,
      });
      if (res.data.success) {
        this.showMessage("success", "Register Successfully!");
        this.props.history.push("/login");
      } else {
        this.showMessage("error", res.data.message);
      }
    } catch (error) {
      console.log(error);
      this.showMessage("error", "Something Went Wrong");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showMessage = (type, message) => {
    // Implement your custom message display logic here
    console.log(`${type}: ${message}`);
  };

  render() {
    return (
      <>
        <div className="form-container ">
          <form
            onSubmit={this.onfinishHandler}
            className="register-form"
          >
            <h3 className="text-center">Register From</h3>
            <div className="form-item">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <Link to="/login" className="m-2">
              Already user login here
            </Link>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
