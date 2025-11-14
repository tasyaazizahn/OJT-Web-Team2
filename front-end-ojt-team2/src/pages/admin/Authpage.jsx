import React, { useState } from "react";
import { login, register } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let result;
      if (isLogin) {
      result = await login(username, password);
      console.log('Login berhasil,', result);
      navigate('/admin/dashboard');
      }
      else {
        result = await register(username, password);
        console.log('Register berhasil:', result)
        setIsLogin(true);
        alert('Pendaftaran berhasil! Silahkan menunggu persetujuan superadmin.')
      }
    } catch (err) {
      const errorMessage = err.message || err;
      setError(errorMessage);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">

          <div className="card shadow-lg p-4"> 
        <div className="card-body">

      <h2 className="text-center">{isLogin? 'Login Admin' : 'Daftar Admin Baru'}</h2>
      
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className={isLogin? "btn btn-primary w-100" : "btn btn-warning w-100"}>
              {isLogin? "Login Admin" : "Register Admin Baru"}
            </button>

            <p className="text-center mt-2">
              {isLogin ?
              (<>Belum punya akun? <button 
                onClick={() => setIsLogin(false)}
                className="btn text-primary border-0 fw-semibold"
                >Daftar Disini</button></>) :
              (<>Sudah punya akun? <button 
                onClick={() => setIsLogin(true)}
                className="btn text-primary fw-semibold"
                >Login Disini</button></>)
              }
            </p>

          </form>
        

      </div>
      </div>
      </div>
      </div>
    </div>
  );
}