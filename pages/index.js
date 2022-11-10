import { useRouter, withRouter } from "next/router";

const Home = ({ router }) => {
  //const router = useRouter();

  return (
    <div>
      Home Page<button onClick={() => router.push("/about")}>About</button>
    </div>
  );
};

export default withRouter(Home);
