const v0 = `
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v0);
gc();
