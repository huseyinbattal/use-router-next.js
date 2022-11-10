import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();


  return (
    <div>
      <h1>Home Page</h1><br/><button onClick={() => router.push("/about")}>About Page</button>
    </div>
  );
};

export default Home;
