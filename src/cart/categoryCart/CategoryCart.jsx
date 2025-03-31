import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/AppleProductContext";
import scss from "./Category.module.scss";
const CategoryCart = () => {
  const { filterProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <div id={scss.category}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>
              <span>Store.</span>The best way to buy the products you love.
            </h1>
          </div>
          <div className={scss.block}>
            <div
              onclick={() => {
                filterProduct("Mac");
                navigate("/list");
              }}
              className={scss.card}
            >
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502780055"
                alt="Mac"
              />
              <p>Mac</p>
            </div>
            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202502_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1738706422688"
                alt="Iphone"
              />
              <p>Iphone</p>
            </div>
            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875"
                alt="Ipad"
              />
              <p>iPad</p>
            </div>
            <div className={scss.card}>
              <img
                onClick={() => {
                  filterProduct("AppleWatch");
                  setTimeout(() => navigate("/list"), 100); // Даем время на обновление состояния
                }}
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838"
                alt="AppleWatch"
              />
              <p>Apple Watch</p>
            </div>
            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269"
                alt="AppleVisionPro"
              />
              <p>Apple Vision Pro</p>
            </div>
            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822"
                alt="AirPods"
              />
              <p>AirPods</p>
            </div>

            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
                alt="AirTag"
              />
              <p>AirTag</p>
            </div>

            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
                alt="AirPods"
              />
              <p>Apple TV 4K</p>
            </div>

            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654"
                alt="HomePod"
              />
              <p>HomePod</p>
            </div>

            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502322543"
                alt="Accessories"
              />
              <p>Accessories</p>
            </div>

            <div className={scss.card}>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054"
                alt="Apple Gift Card"
              />
              <p>Apple Gift Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCart;
