function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
for (let v3 = 0; v3 < 100; v3++) {
    const v4 = `
        v4 * (v4 ^ -4);
        ~-12517;
        Math.cosh(v2);
    `;
    eval(v4);
}
gc();
