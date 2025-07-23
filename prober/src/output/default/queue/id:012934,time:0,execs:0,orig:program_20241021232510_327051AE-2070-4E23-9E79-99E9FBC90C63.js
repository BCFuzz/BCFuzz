function f0() {
    return f0;
}
class C1 extends f0 {
    constructor() {
        super();
        const o16 = {
            n(a4, a5) {
                const v7 = new Uint8Array(this, a5, a4);
                const v8 = [a5];
                function f9(a10, a11) {
                    return f9;
                }
                const v13 = Date();
                arguments.length = arguments;
                f9(v8, ...v7, v13, ...arguments);
                return this;
            },
        };
        o16.n();
    }
}
new C1();
for (let i21 = 0, i22 = 1176; i22--, i21 < i22;) {
}
gc();
