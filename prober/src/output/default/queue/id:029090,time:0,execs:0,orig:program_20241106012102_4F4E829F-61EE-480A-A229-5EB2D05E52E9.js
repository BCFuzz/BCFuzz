const v1 = `
    Int16Array[2] = -1067233075n;
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v1);
gc();
