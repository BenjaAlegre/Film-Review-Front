import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH_ROLE } from "../../common/constants/api_path.constants";
import { getData } from "../../common/utils/getData";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const roleData = await getData(API_PATH_ROLE + `/User`);  
            const role = roleData.id;
            
            const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, role, name }),
          });
          const data = await response.json();
          if (response.ok) {
            console.log(data);
            localStorage.setItem('token', data.token);
            navigate('/userlist');
          } else {
            console.log('Login failed ');
          }
        } catch (error) {
          console.log('Login failed: ' + error.message);
        }
        console.log(email);
        console.log(password);
        navigate('/login');

      };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crear cuenta</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="userName" className="flex text-sm font-medium leading-6 text-gray-900">Nombre de usuario</label>
                        <div className="mt-2">
                            <input type="userName" value={name} onChange={(e) => setName(e.target.value)} id="userName" name="userName" autoComplete="userName"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                          
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" autoComplete="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>

                        </div>
                        <div className="mt-2">
                            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}  name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>


                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear cuenta</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register;