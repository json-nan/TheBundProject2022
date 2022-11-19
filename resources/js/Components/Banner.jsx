const Banner = ({ banner_img }) => {
    return (
        <div className="w-full">
            <div className="w-full h-[150px] lg:h-[400px] overflow-hidden">
                <img src={`/storage/${banner_img}`} className="h-full" />
            </div>
        </div>
    );
};

export default Banner;
