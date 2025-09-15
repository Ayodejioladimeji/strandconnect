const TrySection = () => {
    return (
        <section className="bg-foreground">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left side - Image */}
                <div className="order-2 lg:order-1">
                    <img
                        src="/image/style-try.png"
                        alt="Two women with beautiful natural hair"
                        className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover"
                    />
                </div>

                {/* Right side - Text content */}
                <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 px-6 sm:px-10 md:px-12 lg:px-15 py-10 lg:py-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#110000] text-center lg:text-left">
                        Try Before You Style
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#545454] text-center lg:text-left">
                        Whether you're prepping for a major hair transformation or just
                        exploring our tool empowers you to make confident choices. Save
                        your favorites, share them with your stylist, and step into your
                        appointment already knowing what you want.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrySection;
