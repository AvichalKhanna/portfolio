export default function Project({ name, description, video, image }) {
  
  const isVideoAvailable = video && video !== "NONE";
  
  return (
    <div className="max-w-md bg-black mx-2 my-4 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 font-inter">
      {isVideoAvailable ? (
        <video
          className="w-screen h-48 object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
          <img className="w-full h-48 object-cover" src={image} alt={name} />
      )}
      
      <div className="pt-5 pl-5 pr-5 pb-2">
        <h2 className="text-xl font-semibold text-white-900 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
