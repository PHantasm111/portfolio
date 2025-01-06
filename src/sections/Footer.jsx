const Footer = () => {

    const handleClick = (name) => {
        const urls = {
            Github: "https://github.com/PHantasm111",
            Twitter: "https://twitter.com",
            Instagram: "https://instagram.com/phantas1_x/profilecard/?igsh=MTNueDB2MHFiY2V4cw==",
        };

        if (urls[name]) {
            window.open(urls[name], "_blank"); // "_blank" 表示在新标签页中打开
        } else {
            console.error(`No URL defined for ${name}`);
        }
    };



return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
            <div className="social-icon cursor-pointer" onClick={() => handleClick("Github")}>
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
            </div>
            <div className="social-icon cursor-pointer" onClick={() => handleClick("Twitter")}>
                <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2"/>
            </div>
            <div className="social-icon cursor-pointer" onClick={() => handleClick("Instagram")}>
                <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
            </div>
        </div>

        <p className="text-white-500">© 2024 Han Pang. All rights reserved.</p>
    </footer>
);
}
;

export default Footer;