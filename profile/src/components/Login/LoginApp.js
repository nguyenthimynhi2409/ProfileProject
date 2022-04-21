
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Navigate, Redirect
} from "react-router-dom";

import ShowUsers from "./ShowUsers";
import Login from "./Login";
import Header from "./LoginHeader";
function App() {
    const [token, setToken] = useState("");

    return (
        <div className="login-container">
            <Header/>

            <BrowserRouter>
                <Routes >

                    {token ? <Route path="/show" element={<ShowUsers/>}/> : <Route path="/login" element={<Login setToken={token}/>}/> }

                </Routes>
            </BrowserRouter>
        </div>

    );



}
export default App;