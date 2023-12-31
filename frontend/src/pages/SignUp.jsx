import React, { useState } from 'react';
import { SiGnuprivacyguard } from 'react-icons/si';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const SignUp = () => {
  const [EmailId, setEmailId] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
const successMessage = () => {

}

  const handleSaveUser = () => {
    const data = {
      EmailId: EmailId,
      Password: Password,
    };

    setLoading(true);
    axios
      .post('http://localhost:3500/', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('User Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });

        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-12 min-w-11">
        <h1 className="text-3xl flex flex-row gap-4 font-medium mt-48">
          {' '}
          <SiGnuprivacyguard /> Sign Up
        </h1>

        <input
          type="text"
          placeholder="EmailId"
          value={EmailId}
          onChange={(e) => setEmailId(e.target.value)}
          className="py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16"
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16"
        />


        <button
          onClick={handleSaveUser}
          className="bg-blue-500 hover:bg-blue-700 p-3 px-12 rounded-xl text-white font-medium"
          type="submit"
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;
