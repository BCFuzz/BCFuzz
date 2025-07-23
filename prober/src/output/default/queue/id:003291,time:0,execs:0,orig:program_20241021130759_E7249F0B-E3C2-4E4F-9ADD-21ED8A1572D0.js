function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
new F6(3n, "5v", "5v", -55361n);
const v13 = `
    (1 / Infinity) ** Infinity;
    class C19 extends Date {
    }
    const v20 = new C19();
    for (let i = 0; i < 5; i++) {
        function f22(a23) {
            return a23;
        }
        v20["toISOString"]();
    }
`;
eval(v13);
gc();
