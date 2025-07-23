const v1 = `
    Int16Array[2] = 2821;
    createGlobalObject();
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v1);
gc();
