const v1 = `
    var g = "valueOf";
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v1);
gc();
