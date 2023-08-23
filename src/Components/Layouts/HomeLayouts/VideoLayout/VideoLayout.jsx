export const VideoLayout = ({ url }) => {
  return (
    <div className="absolute top-0 bottom-0 w-full h-full">
      <video
        slot="background"
        src={url}
        autoPlay
        muted
        loop
        className="h-full w-full object-center object-cover"
      />
    </div>
  );
};
