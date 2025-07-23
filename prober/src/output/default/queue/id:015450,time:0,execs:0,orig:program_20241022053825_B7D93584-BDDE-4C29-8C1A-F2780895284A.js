function f0() {
    return f0;
}
const v1 = [f0,f0];
const v2 = `
    const v4 = v1 - (f0 || v1);
    for (let i7 = 10, i8 = 10; -13369 < i8; i8--) {
    }
    v4 + v4;
`;
eval(v2);
gc();
