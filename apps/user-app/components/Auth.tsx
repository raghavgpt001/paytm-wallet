"use client"
import { Card } from "@repo/ui/card";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Signin() {
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async () => {
    try {
      const result = await signIn('credentials', {
        phone,
        password,
        name,
        email
      });
      console.log("phone:",phone,"pass:", password)
      if (result?.error) {
        setErrorMessage(result.error);
      } else {
        router.push('/');
      }
    } catch (error:any) {
      console.error('Sign in error:', error);
      setErrorMessage('Failed to sign in');
      toast.error('Error occurred: ' + error.message);
    }
  };
  return (<div className="h-3/4 flex justify-center flex-col">
  <div className="flex justify-center">
          <Card title="Signin">
            <div className="w-full">
                <LabelledInput label="Phone Number" placeholder="9876543210" onChange={(e) => {
                        setPhone(e.target.value)
                    }} />
                <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <div className="flex justify-center">
                  <button onClick={handleSubmit} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Sign in</button>
                </div>
                <u><a href="/signup"> Register</a></u>
            </div>
            <div>
                <ToastContainer />
            </div>
          </Card>
        </div>
    </div>
   
  );
}

export function Signup() {
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async () => {
    try {
      const result = await signIn('credentials', {
        phone,
        password,
        name,
        email
      });
      console.log("phone:",phone,"pass:", password)
      if (result?.error) {
        setErrorMessage(result.error);
      } else {
        router.push('/');
      }
    } catch (error:any) {
      console.error('Sign in error:', error);
      setErrorMessage('Failed to sign in');
      toast.error('Error occurred: ' + error.message);
    }
  };

  return (<div className="h-3/4 flex justify-center flex-col">
  <div className="flex justify-center">
          <Card title="Signup">
            <div className="w-full">
                <LabelledInput label="Name" placeholder="Bob" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <LabelledInput label="Email" placeholder="bob@gmail.com" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <LabelledInput label="Phone Number" placeholder="9876543210" onChange={(e) => {
                        setPhone(e.target.value)
                    }} />
                <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <div className="flex justify-center">
                  <button onClick={handleSubmit} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Sign up</button>
                </div>
                <u><a href="/signin"> Signin</a></u>
            </div>
            <div>
                <ToastContainer />
            </div>
          </Card>
        </div>
    </div>
   
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}
