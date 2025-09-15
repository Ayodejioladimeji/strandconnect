const HowitWorks = () => {
    return (
        <section className="bg-warm py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-medium mb-16 text-muted-foreground">
                    How it Works
                </h2>

                <div className="grid md:grid-cols-3 gap-0 w-full lg:max-w-4xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="text-center min-h-[80px] -mt-2 flex flex-col justify-end">
                            <h3 className="font-serif text-2xl font-medium text-primary mb-2">Step 1</h3>
                            <p className="text-muted-foreground text-base">Take a photo</p>
                        </div>

                        <div className="relative p-2 bg-[#3b3838] rounded-lg">
                            <img
                                src="/image/style-step1.png"
                                alt="Take a photo"
                                className="w-48 h-60 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="text-center min-h-[80px] -mt-5 flex flex-col justify-end">
                            <h3 className="font-serif text-2xl font-medium text-primary mb-2">Step 2</h3>
                            <p className="text-muted-foreground text-base">
                                Our AI technology identifies your<br />unique hairstyle.
                            </p>
                        </div>
                        <div className="relative p-2 bg-[#3b3838] rounded-lg">
                            <img
                                src="/image/style-step2.png"
                                alt="AI technology identifies your unique hairstyle"
                                className="w-48 h-60 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="text-center min-h-[80px] -mt-2 flex flex-col justify-end">
                            <h3 className="font-serif text-2xl font-medium text-primary mb-2">Step 3</h3>
                            <p className="text-muted-foreground text-base">Book the look</p>
                        </div>
                        <div className="relative p-2 bg-[#3b3838] rounded-lg">
                            <img
                                src="/image/style-step3.png"
                                alt="Book the look"
                                className="w-48 h-60 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowitWorks;
