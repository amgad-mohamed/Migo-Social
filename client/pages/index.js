import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
  const { state, setState } = useContext(UserContext);
  return (
    <div className="container">
    <p className="text-" style={{ fontSize:"10px"}}>
    {JSON.stringify(state)}
    </p>
    <div className="row">
        <div className="col bg-image">
          <p>
            Migo is a social app where you can share your thoughts with your
            friends.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
