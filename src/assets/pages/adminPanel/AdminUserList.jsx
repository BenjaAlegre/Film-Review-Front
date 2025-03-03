import { Slide, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API_PATH_RESTOREUSER, API_PATH_USERS } from "../../common/constants/api_path.constants";

const AdminUserList = ({ users, onUserDelete, adminRole }) => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const currentUserId = userData?.id;

    const notifySuccess = (message) => toast.success(message)

    const handleClick = async (id, deletedAt) => {
        try {
            const apiPath = deletedAt ? API_PATH_RESTOREUSER : API_PATH_USERS;
            const method = deletedAt ? 'POST' : 'DELETE';
            const response = await fetch(`${apiPath}/${id}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('token'),
                    'role': adminRole
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Datos invalidos");
            }

            onUserDelete();
            deletedAt ? notifySuccess('Usuario restaurado') : notifySuccess('Usuario eliminado')

        } catch (error) {
            console.error(error);
        }
    };
    const sortedUsers = [...users].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


    return (
        <>
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">

                            <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nombre</th>
                            <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Rol</th>
                            <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                            <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase truncate">Registro</th>
                            <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase truncate">Inhabilitado</th>
                            <th className="w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {sortedUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{user.name}</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{user.role.description}</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{user.email}</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{user.createdAt}</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{user.deletedAt ? user.deletedAt : '-'}</td>
                                <td className="py-4 px-6 border-b border-gray-200">
                                    {user.id !== currentUserId && (
                                        <button
                                            onClick={() => handleClick(user.id, user.deletedAt)}
                                            className={`px-4 py-2 font-bold text-white rounded  ${user.deletedAt ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'
                                                }`}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {user.deletedAt ? 'RESTAURAR' : 'ELIMINAR'}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                transition={Slide}
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default AdminUserList;
