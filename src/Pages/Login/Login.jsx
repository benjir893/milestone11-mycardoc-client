// import { useContext } from "react";
// import { AuthContext } from "../../firebase/AuthProvider";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
    // const { logwithGoogle, loginwithEmailandPassword, loginwithGithub } = useContext(AuthContext);
    const {logwithGoogle, loginwithEmailandPassword, loginwithGithub} = useAuth(); //using useAuth hook
    const location = useLocation();
    const navitage = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // const user = {email, password};
        // console.log(user);

        loginwithEmailandPassword(email, password)
            .then(usecredential => {
                const loggeduser = usecredential.user;
                console.log(loggeduser);
                const user = { email };

                axios.post('https://mycardocserver02.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navitage(location?.state ? location?.state : '/')
                        }
                    })
            })
            .then(error =>
                console.error(error)
            )

    }

    const handleGoogleLogin = e => {
        e.preventDefault();

        logwithGoogle()
            .then(usercredential => {
                const user = usercredential.user;
                console.log(user)
                navitage(location?.state ? location?.state : '/')
            })
            .then(error => console.error(error))

    }

    const handleGithubLogin = e => {
        e.preventDefault();

        loginwithGithub()
            .then(usercredential => {
                const user = usercredential.user;
                console.log(user);
                navitage(location?.state ? location?.state : '/')
            })
            .then(error => console.error(error))

    }
    return (
        <div>
            <Helmet>
                <title>cardoc/Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/register'}><button className="label-text-alt link link-hover">Forgot Password?</button></Link>
                                </label>
                                <label className="label">
                                    <button onClick={handleGoogleLogin} className="label-text-alt link link-hover">Login with Google</button>
                                    <button onClick={handleGithubLogin} className="label-text-alt link link-hover">Login with Github</button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;