import img1 from '../assets/Mask group (1).png';
import img2 from '../assets/Image-living room.png';
import img3 from '../assets/Mask Group (2).png';

const CategoriesSection = () => {
    return (
        <section className="flex flex-wrap justify-center flex-col text-center my-[50px]">
            <div>
                <h2 className="font-bold text-[32px] ">Browse The Range</h2>
                <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 py-[50px]">
                <div className="category ">
                    <img src={img1} alt="" className="category-img" />
                    <p>Dining</p>
                </div>
                <div className="category">
                    <img src={img2} alt="" className="category-img" />
                    <p>Living</p>
                </div>
                <div className="category">
                    <img src={img3} alt="" className="category-img" />
                    <p>Bedroom</p>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection