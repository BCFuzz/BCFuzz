class C2 {
    constructor(a4, a5) {
        RegExp[Symbol.match] = a5;
        RegExp(RegExp);
    }
}
new C2(268435440, 1);
gc();
