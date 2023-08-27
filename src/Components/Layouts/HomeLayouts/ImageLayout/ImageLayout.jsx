export const ImageLayout = ({ url }) => {
  return (
    <div className="absolute top-0 bottom-0 w-full h-full">
      <img
        slot="background"
        src={url}
        className="h-full w-full object-center object-cover my-image"
      />
    </div>
  );
};
