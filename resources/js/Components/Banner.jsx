const Banner = ({ banner_img }) => {
    return (
        <div className="w-full">
            <div className="w-full h-[150px] lg:h-[300px] overflow-hidden">
                <img src={`/storage/${banner_img}`} />
            </div>
        </div>
    );
};

export default Banner;
