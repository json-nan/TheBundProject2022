const Banner = ({ banner_img }) => {
    return (
        <div className="w-full ">
            <div className="w-full flex items-center h-[75px] sm:h-[250px] lg:h-[350px] overflow-hidden">
                <img src={`/storage/${banner_img}`} className="w-full " />
            </div>
        </div>
    );
};

export default Banner;
