class C0 {
    constructor(a2, a3) {
        a3++;
        RegExp[Symbol.match] = a3;
        RegExp(RegExp);
    }
}
new C0(C0, C0);
gc();
