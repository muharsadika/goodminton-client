import PropTypes from "prop-types";

AuthImage.propTypes = {
  imageUrl: PropTypes.string,
}

function AuthImage({ imageUrl }) {
  return (
    <div className="w-full h-screen">
      <img
        src={imageUrl}
        alt="Placeholder Image"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default AuthImage;
