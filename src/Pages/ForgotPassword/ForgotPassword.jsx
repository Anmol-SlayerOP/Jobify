import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../App';
import { Footer, Navbar } from '../../components';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState({ msg: '', type: true });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/auth/forgot-password`,
        { email },
        { headers: { 'Content-Type': 'application/json' } },
      );
      setNotice({ msg: response.data.msg, type: true });
    } catch (err) {
      let m = err.response?.data?.msg || 'There is an error. Please try again later. 😥';
      setNotice({ msg: m, type: false });
    } finally {
      setTimeout(() => setNotice({ msg: '', type: true }), 10000);
    }
  };

  return (
    <div className="w-[100%] overflow-hidden">
      <Navbar />
      <div className="mx-1 my-20">
        <p className="mb-4 text-center font-bold text-blue lg:md:capitalize">Forgot Password</p>
        <h2 className="text-center text-4xl font-semibold text-black/90 lg:md:sm:text-6xl">
          Reset Your Password
        </h2>
        <div className="mt-12 flex justify-center">
          <form autoComplete="on" onSubmit={handleForgotPassword} className="mx-4 w-96 space-y-4 lg:md:space-y-4">
            <label htmlFor="email" className="block text-xl font-semibold">Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id="email"
              placeholder="Email"
              className="w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <button type="submit" className="mt-4 block rounded-full bg-blue px-8 py-4 font-semibold text-white transition-all duration-500 ease-in-out hover:bg-black lg:md:px-16">
              Submit
            </button>
            {notice.msg && (
              <div className={`text-center w-full sm:w-96 -mb-5 break-words ml-auto mr-auto text-sm p-[0.9rem] mt-6 rounded-lg ${
                notice.type ? 'bg-emerald-50 border border-emerald-300 text-emerald-500' : 'bg-red-100 border border-red-300 text-red-600'
              }`}>
                {notice.msg}
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
