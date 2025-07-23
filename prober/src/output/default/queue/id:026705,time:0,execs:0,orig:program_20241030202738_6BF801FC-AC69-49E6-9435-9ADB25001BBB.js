const v1 = `
    Int16Array[2] = Uint16Array;
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v1);
gc();
