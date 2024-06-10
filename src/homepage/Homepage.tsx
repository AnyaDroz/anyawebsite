import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let navigate = useNavigate();

  const routeChangeAnalogue = (e: React.MouseEvent) => {
    let path = `/analogue`;
    navigate(path);
  };
  const routeChangeMulti = (e: React.MouseEvent) => {
    let path = `/multi-transactions`;
    navigate(path);
  };
  const routeChangeLoupe = (e: React.MouseEvent) => {
    let path = `/loupe`;
    navigate(path);
  };
  const routeChangeEcho = (e: React.MouseEvent) => {
    let path = `/echo`;
    navigate(path);
  };
  const routeChangeAccess = (e: React.MouseEvent) => {
    let path = `/access`;
    navigate(path);
  };
  const routeChangeHome = (e: React.MouseEvent) => {
    let path = `/`;
    navigate(path);
  };

  return (
    <>
      <button onClick={routeChangeAnalogue}>Analogue</button>
      <button onClick={routeChangeMulti}>Multi-transactions</button>
      <button onClick={routeChangeLoupe}>Loupe</button>
      <button onClick={routeChangeEcho}>Echo</button>
      <button onClick={routeChangeAccess}>Instant access</button>
      <button onClick={routeChangeHome}>Home</button>
    </>
  );
};

export default Homepage;
