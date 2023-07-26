// // // frontend/src/components/Login.js
// // import React, { Component } from 'react';
// // import { withRouter } from 'react-router-dom';
// // import axios from 'axios';

// // class Login extends Component {
// //   state = {
// //     username: '',
// //     password: '',
// //   };

// //   handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     this.setState({ [name]: value });
// //   };

// //   handleLogin = async (e) => {
// //     e.preventDefault();
// //     const { username, password } = this.state;
// //     try {
// //       const response = await axios.post('/login', { username, password });
// //       const token = response.data.token;
// //       localStorage.setItem('token', token);
// //       this.props.history.push('/home');
// //     } catch (error) {
// //       console.error('Login failed:', error.message);
// //     }
// //   };

// //   render() {
// //     const { username, password } = this.state;
// //     return (
// //       <div>
// //         <h2>Login</h2>
// //         <form onSubmit={this.handleLogin}>
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
// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default withRouter(Login);





// // import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// // import axios from 'axios';

// // const Login = () => {
// //   const history = useHistory();
// //   const [formData, setFormData] = useState({ username: '', password: '' });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/login', formData);
// //       const token = response.data.token;
// //       localStorage.setItem('token', token);
// //       history.push('/home');
// //     } catch (error) {
// //       console.error('Login failed:', error.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="text"
// //           name="username"
// //           placeholder="Username"
// //           value={formData.username}
// //           onChange={handleInputChange}
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={formData.password}
// //           onChange={handleInputChange}
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;




// import React from "react";
// //import "../styles/RegiserStyles.css";
// //import { Form, Input, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   //form handler
//   const onfinishHandler = async (values) => {
//     try {
//       const res = await axios.post("/api/v1/user/login", values);
//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         message.success("Login Successfully");
//         navigate("/");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       message.error("something went wrong");
//     }
//   };
//   return (
//     <div className="form-container ">
//       <Form
//         layout="vertical"
//         onFinish={onfinishHandler}
//         className="register-form"
//       >
//         <h3 className="text-center">Login From</h3>

//         <Form.Item label="Email" name="email">
//           <Input type="email" required />
//         </Form.Item>
//         <Form.Item label="Password" name="password">
//           <Input type="password" required />
//         </Form.Item>
//         <Link to="/register" className="m-2">
//           Not a user Register here
//         </Link>
//         <button className="btn btn-primary" type="submit">
//           Login
//         </button>
//       </Form>
//     </div>
//   );
// };

// export default Login;



import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onfinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/v1/user/login', values);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        alert('Login Successfully');
        this.props.history.push('/');
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="form-container">
        <form
          layout="vertical"
          onSubmit={(e) => {
            e.preventDefault();
            this.onfinishHandler({ email: this.state.email, password: this.state.password });
          }}
          className="register-form"
        >
          <h3 className="text-center">Login From</h3>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />

          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;


