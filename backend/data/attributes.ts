class Attributes {

  public static IsValid(value: any) {
    if (typeof (value) === 'string') {
      return value !== '' ? true : false;
    } else if (Array.isArray(value)) {
      return value.length > 0 ? true : false;
    }
    return !Attributes.isNullOrUndefined(value) ? true : false;
  }

  static ReturnIfValid = (value: any, defaultValue = undefined) => Attributes.IsValid(value) ? value : defaultValue;
  static isNullOrUndefined = (value: any) => (value === null || value === undefined);
}

export default Attributes;