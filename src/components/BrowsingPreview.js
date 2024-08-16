import "../stylesheets/BrowsingPreview.css";
import FillerPhoto from "../images/salad.jpg";

const BrowsingPreview = () => {
  return (
    <div className="preview-container">
        <div>
            <img
                src={FillerPhoto}
                alt="recipe"
                className="preview-image"
            /> 

        </div>
        <div className="preview-text-container">
            <div>Recipe Name</div>
        </div>
    </div>
  );
}

export default BrowsingPreview;