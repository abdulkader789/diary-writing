import { Link } from "react-router-dom";
import authImg from "../assets/undraw_resume_re_hkth.svg"
import { useState } from "react";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username, password)


    };

    return (
        <Form
            label={"register"} username={username} setUsername={setUsername} password={password} setPassword={setPassword} redirectTo={"login"} handleSubmit={handleSubmit}>

        </Form>
    );
};

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username, password)

    };

    return (
        <Form
            label={"login"} username={username} setUsername={setUsername} password={password} setPassword={setPassword} redirectTo={"register"} handleSubmit={handleSubmit}>

        </Form>
    );
};

const Form = ({ label, username, setUsername, password, setPassword, redirectTo, handleSubmit }) => {


    return (
        <div className="auth-container md:px-20 pt-5 ">
            <div className="p-10  shadow-md border-1 bg-violet-100">
                <h1 className="mb-8 font-extrabold text-4xl capitalize">{label}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label className="block font-semibold" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                                autoComplete="off"
                                type="text"
                                id="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />

                        </div>


                        <div className="mt-4">
                            <label className="block font-semibold" htmlFor="password">
                                Password
                            </label>
                            <input
                                className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                                type="password"
                                autoComplete="off"

                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}

                            />
                        </div>

                        <div className="flex items-center justify-between mt-8">
                            <button
                                type="submit"
                                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                {label}
                            </button>
                            <a className="font-semibold capitalize">Need to {redirectTo}?</a>
                            <button className="font-semibold capitalize">
                                <Link to={"/" + redirectTo}>{redirectTo}</Link>

                            </button>
                        </div>
                    </form>

                    <aside>

                        <img src={authImg} alt='' />
                    </aside>
                </div>
            </div >
        </div >
    )
}