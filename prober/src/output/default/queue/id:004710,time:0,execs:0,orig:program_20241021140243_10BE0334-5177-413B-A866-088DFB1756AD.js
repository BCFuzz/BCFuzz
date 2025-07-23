class C0 {
    constructor(a2, a3, a4, a5) {
        for (let i = 0; i < 5; i++) {
            const v8 = new Int32Array(681);
            function f9(a10, a11, a12, a13) {
                Object.defineProperty(arguments, Symbol.toStringTag, { enumerable: true, value: a13 });
                arguments.valueOf = f9;
            }
            v8.map(f9);
        }
    }
}
new C0(C0, C0, C0, C0);
gc();
