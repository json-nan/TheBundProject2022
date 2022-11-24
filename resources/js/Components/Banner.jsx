const Banner = ({ banner_img }) => {
    return (
        <div className="w-full">
            <div className="w-full h-[130px] sm:h-[150px] lg:h-[400px] overflow-hidden">
                <img src={`/storage/${banner_img}`} className="w-full -mt-6" />
            </div>
        </div>
    );
};

export default Banner;
