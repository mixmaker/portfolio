export const pageAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
    },
  },
};
