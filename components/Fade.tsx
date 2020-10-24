import { ReactNode } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

const TIMEOUT = 200;

const getTransitionStyles = {
  entering: {
    opacity: 0,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(-50px)`,
  },
  exited:  {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(0px)`,
  },
};

export const Fade: React.FC<{ loc: string; children: ReactNode }> = ({ loc, children }) => {
  return (
    <TransitionGroup>
      <Transition key={loc} timeout={{ enter: TIMEOUT, exit: TIMEOUT }}>
        {(state) => (
          <div
            style={{
              ...getTransitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </TransitionGroup>
  );
};
