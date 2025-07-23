const v0 = `
    Promise.resolve;
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    }
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v0);
gc();
