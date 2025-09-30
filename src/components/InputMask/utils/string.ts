import { type MaskOptions } from './parseMask';

export function isPermanentChar(maskOptions: MaskOptions, pos: number): boolean {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
export function isAllowedChar(maskOptions: MaskOptions, pos: number, character: string): boolean {
  const mask = maskOptions.mask;
  const charsRules = maskOptions.charsRules;

  if (!character || !mask) {
    return false;
  }

  if (isPermanentChar(maskOptions, pos)) {
    return mask[pos] === character;
  }

  const ruleChar = mask[pos];
  const charRule = charsRules[ruleChar];
  return new RegExp(charRule).test(character);
}
export function isEmpty(maskOptions: MaskOptions, value: string): boolean {
  return value.split('').every(function (character: string, i: number) {
    return isPermanentChar(maskOptions, i) || !isAllowedChar(maskOptions, i, character);
  });
}
export function getFilledLength(maskOptions: MaskOptions, value: string): number {
  const maskChar = maskOptions.maskChar;
  const prefix = maskOptions.prefix;

  if (!maskChar) {
    while (prefix && value.length > prefix.length && isPermanentChar(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  let filledLength = prefix?.length || 0;

  for (let i = value.length; i >= (prefix?.length || 0); i--) {
    const character = value[i];
    const isEnteredCharacter = !isPermanentChar(maskOptions, i) && isAllowedChar(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
export function isFilled(maskOptions: MaskOptions, value: string): boolean {
  return getFilledLength(maskOptions, value) === (maskOptions.mask?.length || 0);
}
export function formatValue(maskOptions: MaskOptions, value: string): string {
  const maskChar = maskOptions.maskChar;
  const mask = maskOptions.mask;
  const prefix = maskOptions.prefix;

  if (!mask) {
    return value;
  }

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (prefix && value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentChar(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    // Create empty formatted value without recursion
    let emptyValue = '';
    for (let i = 0; i < mask.length; i++) {
      if (isPermanentChar(maskOptions, i)) {
        emptyValue += mask[i];
      } else {
        emptyValue += maskChar;
      }
    }
    return insertString(maskOptions, emptyValue, value, 0);
  }

  // Create masked value for empty input
  for (let i = 0; i < mask.length; i++) {
    if (isPermanentChar(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
export function clearRange(maskOptions: MaskOptions, value: string, start: number, len: number): string {
  const end = start + len;
  const maskChar = maskOptions.maskChar;
  const mask = maskOptions.mask;
  const prefix = maskOptions.prefix;
  const arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (let i = end; i < arrayValue.length; i++) {
      if (isPermanentChar(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix?.length || 0, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character: string, i: number) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentChar(maskOptions, i) && mask) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
export function insertString(maskOptions: MaskOptions, value: string, insertStr: string, insertPos: number): string {
  const mask = maskOptions.mask;
  const maskChar = maskOptions.maskChar;
  const prefix = maskOptions.prefix;
  const arrayInsertStr = insertStr.split('');
  const isInputFilled = isFilled(maskOptions, value);

  const isUsablePosition = function isUsablePosition(pos: number, character: string) {
    return !isPermanentChar(maskOptions, pos) || (mask && character === mask[pos]);
  };

  const isUsableCharacter = function isUsableCharacter(character: string, pos: number) {
    return !maskChar || !isPermanentChar(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && mask && insertPos > value.length) {
    value += mask.slice(value.length, insertPos);
  }

  arrayInsertStr.every(function (insertCharacter: string) {
    while (!isUsablePosition(insertPos, insertCharacter)) {
      if (insertPos >= value.length && mask) {
        value += mask[insertPos];
      }

      if (!isUsableCharacter(insertCharacter, insertPos)) {
        return true;
      }

      insertPos++; // stop iteration if maximum value length reached

      if (mask && insertPos >= mask.length) {
        return false;
      }
    }

    const isAllowed = isAllowedChar(maskOptions, insertPos, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPos < value.length) {
      if (maskChar || isInputFilled || insertPos < (prefix?.length || 0)) {
        value = value.slice(0, insertPos) + insertCharacter + value.slice(insertPos + 1);
      } else {
        value = value.slice(0, insertPos) + insertCharacter + value.slice(insertPos);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPos++; // stop iteration if maximum value length reached

    return mask ? insertPos < mask.length : false;
  });
  return value;
}
export function getInsertStringLength(maskOptions: MaskOptions, insertStr: string, insertPos: number): number {
  const mask = maskOptions.mask;
  const maskChar = maskOptions.maskChar;
  const arrayInsertStr = insertStr.split('');
  const initialInsertPos = insertPos;

  const isUsablePosition = function isUsablePosition(pos: number, character: string) {
    return !isPermanentChar(maskOptions, pos) || (mask && character === mask[pos]);
  };

  arrayInsertStr.every(function (insertCharacter: string) {
    while (!isUsablePosition(insertPos, insertCharacter)) {
      insertPos++; // stop iteration if maximum value length reached

      if (mask && insertPos >= mask.length) {
        return false;
      }
    }

    const isAllowed = isAllowedChar(maskOptions, insertPos, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPos++;
    } // stop iteration if maximum value length reached


    return mask ? insertPos < mask.length : false;
  });
  return insertPos - initialInsertPos;
}