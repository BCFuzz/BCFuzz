function f0() {
    return f0;
}
const v1 = [f0,f0,f0];
const v2 = `
    f0 >= v1.length;
    if (v2) {
    }
`;
eval(v2);
gc();
