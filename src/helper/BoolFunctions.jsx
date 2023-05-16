export const AND = (b1, b2) => {
  if (b1 & (b2 === 1)) {
    return 'WIN';
  } else {
    return 'TIE';
  }
};

export const OR = (b1, b2) => {
  if (b1 || b2 === 1) {
    return 'WIN';
  } else {
    return 'TIE';
  }
};

export const XOR = (b1, b2) => {
  if (b1 === b2) {
    return 'TIE';
  } else {
    return 'WIN';
  }
};

export const NOR = (b1, b2) => {
  if (b1 || b2 === 0) {
    return 'WIN';
  } else {
    return 'TIE';
  }
};
