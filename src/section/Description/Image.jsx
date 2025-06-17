function Image({ src }) {
  return (
    <img
      className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
      src={src}
      alt="dashboard feature image"
    />
  );
}

export default Image;
