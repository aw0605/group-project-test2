// import { useEffect, useRef, RefObject } from "react";

// // IntersectionObserver의 옵션에 대한 타입을 선언합니다.
// interface ObserverOptions extends IntersectionObserverInit {
//   freezeOnceVisible?: boolean;
// }

// export const useIntersectionObserver = (
//   onIntersect: () => void,
//   options: ObserverOptions
// ): RefObject<HTMLDivElement> => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const currentRef = ref.current; // ref를 변수에 복사합니다.
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.some((entry) => entry.isIntersecting) && onIntersect(),
//       options
//     );

//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, [onIntersect, options]); // useEffect 의존성 배열에 ref.current를 직접 사용하지 않습니다.

//   return ref;
// };
import { useRef, useCallback, useEffect } from "react";

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const useIntersect = (
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersect;
