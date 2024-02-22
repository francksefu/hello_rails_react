import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/user/userSlice";
import { useEffect } from "react";



export const Great = () => {
    const user = useSelector((state) => state.user.data)    
    const dispatch = useDispatch;
    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    //const data = useSelector((state) => state.user.data)
    return (
        <h1>{user.greeting}</h1>
    );
}

export default Great;