class C1 {
}
const v2 = new C1();
const v3 = -v2;
const v4 = [];
v4.push(v3);
const o24 = {
    n(a7, a8, a9) {
        a7[1] = v4;
        const v10 = this;
        for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
        }
        return v10.Intl.DateTimeFormat.supportedLocalesOf(a7);
    },
};
const v25 = o24.n;
function f26() {
    return "boolean";
}
function f27(a28) {
    return a28;
}
Object.defineProperty(v25, 0, { configurable: true, get: f26, set: f27 });
v25(v25);
gc();
