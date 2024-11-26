import Button from "./Button";
import "../css/Style.css";

interface Props {
    name: string;
    title: string;
    buttonText: string;
    buttonTextEng: string;
    buttonLink: string;
    buttonLinkEng: string;
    imgLink: string;
    text: string;
}

function Hero({ name, title, buttonText, buttonTextEng, imgLink, buttonLink, buttonLinkEng, text }: Props) {
    const onButtonClick = (lang: boolean) => {
        const link = document.createElement("a");
        if (lang) {
            link.href = buttonLink;
        } else {
            link.href = buttonLinkEng;
        }

        link.download = "Curriculum Vitae.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="container my-5 px-0">
                <div className="d-sm-flex justify-content-center white-background gap-md-5 gap-xxl-0 row p-5 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg white-background">
                    <div className="col-lg-7 p-xxl-5 p-0 pt-lg-3">
                        <div className="lc-block mb-3">
                            <div>
                                <h1 className="fw-bold display-1 text-center text-lg-start">
                                    {name}
                                    <p></p>
                                </h1>
                            </div>
                        </div>

                        <div className="lc-block mb-3">
                            <div>
                                <p className="h2 display-5 text-center text-lg-start">{title}</p>
                            </div>
                        </div>

                        <div className="lc-block d-grid gap-3 d-md-flex my-5 justify-content-md-center justify-content-lg-start">
                            <Button color="dark" onButtonClick={() => onButtonClick(true)}>
                                {buttonText}
                            </Button>
                            <Button color="dark" onButtonClick={() => onButtonClick(false)}>
                                {buttonTextEng}
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-8 offset-lg-1 p-0 mb-5 m-xxl-5 m-md-3 mb-md-5 mb-lg-3 mx-md-0 overflow-hidden rounded-5 shadow-lg">
                        <div className="lc-block white-background">
                            <img className="w-100" src={imgLink} alt="Profile Picture" width="720px" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 px-0">
                <div className="d-sm-flex justify-content-center white-background gap-md-5 gap-xxl-0 row p-5 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-10 p-lg-5 text-center p-0 pb-5">
                        <p className="mb-0 fs-4">{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
