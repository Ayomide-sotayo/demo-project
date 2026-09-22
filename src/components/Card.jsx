function Card({ name, description, image }) {
  return (
    <div className="flex w-100 my-2 flex-col p-4 bg-blue-500 text-white gap-6 rounded shadow-olive-300">
      <img src={image} alt="" />
      <h1 className="text-white text-3xl">{name}</h1>
      <p className="text-2xl text-white ">{description}</p>
    </div>
  );
}

export default Card;
