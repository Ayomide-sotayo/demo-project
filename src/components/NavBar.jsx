export default function NavBar() {
  return (
    <nav className="flex bg-blue-500 px-10 py-4 justify-between ">
      <span className="text-2xl font-bold text-white">Logo</span>
      <ul className="flex gap-4 text-white text-2xl font-semibold ">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="bg-blue-200 px-4 py-2 ">Join us</button>
    </nav>
  );
}
