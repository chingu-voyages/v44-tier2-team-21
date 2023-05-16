export const AND = (b1, b2) => {
  if (b1 & b2 === 1) {
    console.log('WIN');
  } else {
    console.log('TIE');
  }
};

export const OR = (b1, b2) => {
  if (b1 || b2 === 1) {
    console.log('WIN');
  } else {
    console.log('TIE');
  }
};

export const XOR = (b1, b2) => {
  if (b1 === b2) {
    console.log('TIE');
  } else {
    console.log('WIN');
  }
};

export const NOR = (b1, b2) => {
  if (b1 || b2 === 0) {
    console.log('WIN');
  } else {
    console.log('TIE');
  }
};

// SWITCHED TO CONSOLE LOGS FOR TESTING.