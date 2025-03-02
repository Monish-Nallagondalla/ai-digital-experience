
import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green bg-clip-text text-transparent">Cookie Policy</h1>
                
                <div className="space-y-6">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Introduction</h2>
                        <p className="text-gray-300 mb-4">
                            This Cookie Policy explains how ApplyAI.today ("we", "us", and "our") uses cookies and similar technologies 
                            to recognize you when you visit our website. It explains what these technologies are and why we use them, 
                            as well as your rights to control our use of them.
                        </p>
                        <p className="text-gray-300">
                            By continuing to use our site, you are agreeing to our use of cookies as described in this policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">What are cookies?</h2>
                        <p className="text-gray-300 mb-4">
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                            They are widely used by website owners to make their websites work, or to work more efficiently, as well 
                            as to provide reporting information.
                        </p>
                        <p className="text-gray-300">
                            Cookies set by the website owner (in this case, ApplyAI.today) are called "first-party cookies". Cookies 
                            set by parties other than the website owner are called "third-party cookies". Third-party cookies enable 
                            third-party features or functionality to be provided on or through the website (e.g., advertising, interactive 
                            content, and analytics).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Types of cookies we use</h2>
                        <div className="ml-4">
                            <h3 className="text-xl font-medium mb-2 text-neon-orange">Essential Cookies</h3>
                            <p className="text-gray-300 mb-4">
                                These cookies are necessary for the website to function properly. They enable core functionality such as 
                                security, network management, and account access. You may disable these by changing your browser settings, 
                                but this may affect how the website functions.
                            </p>

                            <h3 className="text-xl font-medium mb-2 text-neon-orange">Analytics Cookies</h3>
                            <p className="text-gray-300 mb-4">
                                We use analytics cookies to help us understand how users engage with our website. These cookies collect 
                                information about your use of the website, which helps us improve it. For example, we use these cookies 
                                to discover which pages are most frequently visited and to measure site traffic.
                            </p>

                            <h3 className="text-xl font-medium mb-2 text-neon-orange">Functionality Cookies</h3>
                            <p className="text-gray-300 mb-4">
                                These cookies allow the website to remember choices you make (such as your preferred language or the region you 
                                are in) and provide enhanced, more personal features.
                            </p>

                            <h3 className="text-xl font-medium mb-2 text-neon-orange">Marketing Cookies</h3>
                            <p className="text-gray-300 mb-4">
                                These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
                                and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">How can you control cookies?</h2>
                        <p className="text-gray-300 mb-4">
                            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by 
                            adjusting the settings in your browser.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Most browsers are initially set up to accept cookies. If you prefer, you can set your browser to refuse cookies 
                            or to alert you when cookies are being sent. The Help function within your browser should explain how. 
                            Alternatively, you may visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline">www.allaboutcookies.org</a>, 
                            which contains comprehensive information on how to manage cookies across a wide variety of desktop browsers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Updates to this Cookie Policy</h2>
                        <p className="text-gray-300 mb-4">
                            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
                            or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed 
                            about our use of cookies and related technologies.
                        </p>
                        <p className="text-gray-300">
                            The date at the top of this Cookie Policy indicates when it was last updated.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Contact us</h2>
                        <p className="text-gray-300">
                            If you have any questions about our use of cookies or other technologies, please <Link to="/contact" className="text-neon-green hover:underline">contact us</Link>.
                        </p>
                    </section>
                </div>
                
                <div className="mt-12 flex justify-center">
                    <Link to="/" className="px-6 py-3 bg-neon-blue bg-opacity-20 hover:bg-opacity-30 border border-neon-blue text-white rounded-lg transition duration-300">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
