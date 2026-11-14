import { useState } from "react";
import "./ScreenshotCarousel.css";

export default function ScreenshotCarousel({ screenshots, label }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const screenshot = screenshots[activeIndex];
    const moduleTitle = screenshot.moduleTitle || label.replace(/ screenshots$/, "");
    const hasMultiple = screenshots.length > 1;

    const move = (direction) => {
        setActiveIndex((index) => (index + direction + screenshots.length) % screenshots.length);
    };

    return (
        <figure
            className="growth-image-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label={label}
        >
            <div className="growth-image-carousel__image-wrap">
                <img
                    key={screenshot.src}
                    className="growth-image-carousel__image"
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width="1340"
                    height="618"
                    loading="lazy"
                />
                {hasMultiple && (
                    <>
                        <button
                            className="growth-image-carousel__arrow growth-image-carousel__arrow--previous"
                            type="button"
                            aria-label="Previous image"
                            onClick={() => move(-1)}
                        >
                            <i className="bi bi-arrow-left" aria-hidden="true" />
                        </button>
                        <button
                            className="growth-image-carousel__arrow growth-image-carousel__arrow--next"
                            type="button"
                            aria-label="Next image"
                            onClick={() => move(1)}
                        >
                            <i className="bi bi-arrow-right" aria-hidden="true" />
                        </button>
                    </>
                )}
            </div>
            <figcaption className="growth-image-carousel__caption">
                <span>
                    <strong>{moduleTitle}</strong>
                    <span>{screenshot.label}</span>
                </span>
                {hasMultiple && (
                    <span className="growth-image-carousel__count" aria-live="polite">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
                    </span>
                )}
            </figcaption>
        </figure>
    );
}
