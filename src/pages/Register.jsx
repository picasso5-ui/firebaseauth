import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const RegisterUser = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("passowords do not match...");
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        toast.success("Registration successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="form-parent">
      {loading ? (
        <p>loading ...</p>
      ) : (<div>
          <h2 className="text-center">Register</h2>
          <form className="form" onSubmit={RegisterUser}>
            <input
              type="email"
              placeholder="Enter Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Enter Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Confirm Your password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <Link to="/login"></Link>
          </div>
      )}
    </div>
  );
};

export default Register;
