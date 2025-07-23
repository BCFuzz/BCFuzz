function f0(a1, a2) {
    /((?<a>)*)/dis.exec(a2);
    return a1;
}
const o11 = {
    toString(a7, a8) {
        class C9 {
        }
        class C10 extends C9 {
        }
        Object.defineProperty(C9, 6, { configurable: true, value: 2.220446049250313e-16 });
        return 2.220446049250313e-16;
    },
};
o11.valueOf = f0;
o11.toString();
-o11;
gc();
