import Images from "../ui/images";
import AnimationContainer from "../utils/animation-container";

const Services = () => {
    return (
        <div className="flex items-center justify-center w-full py-20">
            <div className="flex flex-col items-center w-full">
                <AnimationContainer>
                    <div className="grid w-full place-items-center grid-cols-1 p-6 md:p-8 md:grid-cols-[.55fr_1fr] rounded-2xl bg-[#121212]/50 border border-border">
                        <div className="flex flex-col items-start justify-center lg:pl-6">
                            <h4 className="text-xl font-semibold lg:text-2xl">
                                The Post-Meeting Chaos Ends Here
                            </h4>
                            <p className="mt-4 text-neutral-500 lg:text-lg">
                                Most teams struggle with post-meeting execution—notes get lost, follow-ups get delayed, and key insights slip through the cracks.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-8 sm:mt-0 lg:py-4 lg:px-10">
                            <Images.service className="w-full h-auto md:h-72" />
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-8 mt-8">
                        <div className="flex flex-col items-start w-full px-6 py-6 border border-border bg-[#121212]/50 rounded-2xl lg:px-8 lg:py-6">
                            <Images.service2 className="w-full h-auto px-8" />
                            <div className="flex flex-col items-start lg:pl-6">
                                <h5 className="mt-8 text-xl font-semibold lg:text-2xl">
                                    Meeting notes scattered across different tools
                                </h5>
                                <p className="mt-2 lg:max-w-sm text-neutral-500">
                                    Follow-ups getting delayed or forgotten, key insights slipping through the cracks, manual CRM updates eating up valuable time.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full px-6 py-6 border border-border bg-[#121212]/50 rounded-2xl lg:px-8 lg:py-8">
                            <h5 className="text-xl font-semibold lg:text-2xl">
                                End-to-End Meeting Intelligence
                            </h5>
                            <p className="mt-2 lg:max-w-xs text-neutral-500">
                                An AI system that automates the entire post-call process so nothing gets missed.
                            </p>
                            <div className="flex items-center w-full px-16 lg:px-0">
                                <Images.service3 className="w-full h-auto mt-6" />
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_1fr] w-full gap-8 mt-8">
                        <div className="flex flex-col items-start justify-center w-full p-6 border lg:p-8 xl:p-10 border-border bg-[#121212]/50 rounded-2xl">
                            <div className="flex items-center w-full px-16 lg:px-0">
                                <Images.service4 className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start mt-4 lg:mt-auto lg:pl-2">
                                <h5 className="text-xl font-semibold lg:text-2xl">
                                    AI-Powered Execution
                                </h5>
                                <p className="mt-2 lg:max-w-sm text-neutral-500">
                                    CoNNIE AI is the Oprah for Sales Meetings - extracting the most important things to focus on and acting on behalf of the user.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full p-6 border lg:p-8 border-border bg-[#121212]/50 rounded-2xl">
                            <div className="flex flex-col items-start lg:pl-2">
                                <h5 className="text-xl font-semibold lg:text-2xl">
                                    Complete Meeting Automation
                                </h5>
                                <p className="mt-2 lg:max-w-sm text-neutral-500">
                                    Its like if Otter AI and Superhuman had a baby, creating a platform that turns vague meeting summaries into realistic actions.
                                </p>
                            </div>
                            <div className="flex items-center w-full mt-8">
                                <Images.service5 className="w-full h-60 px-8" />
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </div>
    )
};

export default Services
