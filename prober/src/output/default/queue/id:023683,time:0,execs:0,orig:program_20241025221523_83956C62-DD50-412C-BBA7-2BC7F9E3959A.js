class C1 {
}
const v2 = `
    async function* f3(a4, a5) {
        return f3;
    }
    function f6() {
        (C1 >>> 25008) ** 31063;
        return 25008;
    }
    f3.then = f6;
    f3();
`;
eval(v2).next();
gc();
