const v0 = `
    /\u{12345}/myvis;
`;
const v3 = eval(v0);
const v4 = /(?<a>.)\k<a>/iu;
for (let i7 = 0, i8 = 10; i7 < i8; v4.test(v3), i8--) {
}
gc();
