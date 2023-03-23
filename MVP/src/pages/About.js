import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="text-base-content ">
      <Navbar />
      <article className="prose text-lg mx-auto m-5">
        <h1>About Us</h1>
        <p>There is no "I" in team...</p>
      </article>
    </div>
  );
}