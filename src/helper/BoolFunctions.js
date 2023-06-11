export const AND = (b1, b2) => {
  if (b1 && b2 === 1) {
    return 1;
  } else {
    return 0;
  }
};

export const OR = (b1, b2) => {
  if (b1 || b2 === 1) {
    return 1;
  } else {
    return 0;
  }
};

export const XOR = (b1, b2) => {
  if (b1 === b2) {
    return 0;
  } else {
    return 1;
  }
};

export const NOR = (b1, b2) => {
  if (!(b1 || b2)) {
    return 1;
  } else {
    return 0;
  }
};

// SWITCHED TO CONSOLE LOGS FOR TESTING.
