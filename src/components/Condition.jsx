function Condition() {
  let isAdmin = false;
  return (
    <section>
      {isAdmin ? (
        <h1 className="text-3xl text-green-500"> welcome admin</h1>
      ) : (
        <h1 className="text-3xl text-red-500">you are not an admin</h1>
      )}
    </section>
  );
}
export default Condition;
