import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `http://localhost:3000/alltoys/?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data)
            });
    }, [url]);




    return (
        <div>
            {myToys?.length}
        </div>
    );
};

export default MyToys;