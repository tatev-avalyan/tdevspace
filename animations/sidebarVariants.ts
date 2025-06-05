export const sidebarVariants = {
  open: {
    clipPath: `circle(1000px at 90% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: `circle(0px at 90% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
