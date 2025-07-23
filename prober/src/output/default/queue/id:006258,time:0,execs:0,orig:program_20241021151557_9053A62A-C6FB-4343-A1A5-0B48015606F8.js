class C4 {
    constructor(a6, a7) {
        const v8 = this.constructor;
        try { new v8(); } catch (e) {}
        const o10 = {
        };
        const o11 = {
        };
        o11.g = o11;
        const o12 = {
        };
        o12.g = -1073741824;
        o12.d = a7;
        const o13 = {
        };
        o13.b = a7;
        o13.d = 1073741824n;
    }
}
new C4();
new C4(1073741824n, -2147483648n);
new C4(1073741824n, -16623n);
gc();
