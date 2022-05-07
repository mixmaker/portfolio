export const pageAnimation = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: {
      duration: 0.8,
    },
  },
};
