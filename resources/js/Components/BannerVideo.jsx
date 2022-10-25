const BannerVideo = () => {
    return (
        <div className="w-full">
            <video className="w-full" height="500" autoPlay loop muted>
                <source src="/assets/videos/banner.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default BannerVideo;
