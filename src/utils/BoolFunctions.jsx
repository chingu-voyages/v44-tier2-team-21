export function ANDOperation(operation, bool1, bool2) {
  if ((bool1 !== bool2) & (operation === 'And')) {
    return 'TIE';
  } else {
    return 'WIN';
  }
}

export function OROperation(bool1, bool2) {
  if (bool1 !== bool2) {
    return 'TIE';
  } else {
    return 'WIN';
  }
}

export function XOROperation(operation, bool1, bool2) {
  if ((bool1 !== bool2) & (operation === 'And')) {
    return 'TIE';
  } else {
    return 'WIN';
  }
}

export function NANDOperation(operation, bool1, bool2) {
  if ((bool1 !== bool2) & (operation === 'And')) {
    return 'TIE';
  } else {
    return 'WIN';
  }
}

export function NOROperation(operation, bool1, bool2) {
  if ((bool1 !== bool2) & (operation === 'And')) {
    return 'TIE';
  } else {
    return 'WIN';
  }
}

export function XNOROperation(operation, bool1, bool2) {
  if ((bool1 !== bool2) & (operation === 'And')) {
    return 'TIE';
  } else {
    return 'WIN';
  }
}
