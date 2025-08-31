"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { StarIcon } from '../ui/StarIcon';

gsap.registerPlugin(SplitText);

export function Landing() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        const tl = gsap.timeline();

        gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], {
          opacity: 1
        });
        gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], {
          overflow: "hidden"
        });

        gsap.set(starRef.current, {
          scale: 0,
          rotation: -180,
          opacity: 0
        });
        gsap.set(titleRef.current, {
          y: 50,
          opacity: 0
        });
        const subtitleSplit = new SplitText(subtitleRef.current, {
          type: "words,lines",
          linesClass: "line",
        });
        gsap.set(subtitleSplit.lines, {
          yPercent: 100,
          opacity: 0
        });
        const descriptionSplit = new SplitText(descriptionRef.current, {
          type: "words,lines",
          linesClass: "line",
        });

        // Set initial state
        gsap.set(descriptionSplit.lines, {
          yPercent: 100,
          opacity: 0
        });

        // Animate title
        tl.to(titleRef.current, {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power2.out",
        })
        // Animate subtitle
        .to(subtitleSplit.lines, {
          duration: 0.6,
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "expo.out",
        }, 0.3)
        // Animate p
        .to(descriptionSplit.lines, {
          duration: 0.6,
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "expo.out",
        }, 0.6)
        // Animate star
        .to(starRef.current, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)"
        }, 0.8);

        // Cleanup function
        return () => {
          subtitleSplit.revert();
          descriptionSplit.revert();
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="landing"
      className="relative min-h-screen w-full flex items-center justify-center p-8"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,1), transparent 100%),
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        backgroundRepeat: 'no-repeat, repeat, repeat'
      }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12 relative z-10">
        <div className="flex-1 text-left">
          <h1 
            ref={titleRef} 
            className="split text-4xl mb-4 font-extrabold bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Welcome to my portofolio
          </h1>
          <p 
            ref={subtitleRef} 
            className="split text-xl text-white max-w-xl mb-4"
          >
            Hello I'm <span className="font-semibold">huza</span>. Here, you can learn more about me, i try my best to create things with{' '}
            <span role="img" aria-label="heart">❤</span>
          </p>
          <p 
            ref={descriptionRef} 
            className="split text-lg text-white/50 italic"
          >
            z
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div ref={starRef}>
            <StarIcon width={96} height={96} fill="#ffffff" />
          </div>
        </div>
      </div>
    </section>
  );
}