import "../stylesheets/BrowsingPreview.css";

const BrowsingPreview = () => {
  return (
    <div className="preview-container">
        <div>
            <img
                src={"/images/salad.jpg"}
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