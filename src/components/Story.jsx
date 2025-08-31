import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { gsap } from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

function Story() {
  const frameRef = useRef(null);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // Max rotation of 10 degrees
    const rotateY = ((x - centerX) / centerX) * -10; // Max rotation of 10 degrees

    gsap.to(element, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power1.inOut",
      transformPerspective: 500,
      transformOrigin: "center",
    });
  };
  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title={"The st<b>o</b>ry of <br /> a hidden real<b>m</b>"}
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 special-font"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="emtrance"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-40  flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
