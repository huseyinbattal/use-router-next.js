import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div>
     {!router.isReady?<> <h1>About Page</h1><br/><button onClick={() => router.push("/")}>Home Page</button></>:<h1>Loading...</h1>}
    </div>
  );
};

export default Home;