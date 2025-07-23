for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    createGlobalObject();
    /[Z(?<=a)2\u{12345}*]/mu;
`;
runString(v10);
gc();
