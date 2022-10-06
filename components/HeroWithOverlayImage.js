
export default function HeroWithOverlayImage({title, image, button, children}) {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {children}
                        </p>
                        <button className="btn btn-primary"><a href="#start">{button}</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
