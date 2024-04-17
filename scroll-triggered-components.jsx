//scroll-triggered animation

import React, { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from 'gsap';

const ScrollAnimation = () => {
  const { scrollTrigger } = useGSAP();
  const ref = useRef();

  useEffect(() => {
    if (!scrollTrigger) return;

    scrollTrigger.create({
      trigger: ref.current,
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: true,
      onEnter: () => {
        ref.current.material.uniforms.time.value = 0;
      },
      onEnterBack: () => {
        ref.current.material.uniforms.time.value = 0;
      },
      onLeave: () => {
        ref.current.material.uniforms.time.value = 1;
      },
      onLeaveBack: () => {
        ref.current.material.uniforms.time.value = 1;
      },
    });
  }, [scrollTrigger]);

  useFrame(() => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += 0.01;
    }
  });

  return <GradientShader ref={ref} />;
};

export default ScrollAnimation;
