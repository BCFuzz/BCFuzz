class C0 {
    constructor(a2, a3, a4) {
        const v8 = new Uint32Array(1000);
        for (const v9 in v8) {
            function f10(a11, a12, a13, a14) {
                a12.charAt(-1024);
                return arguments;
            }
            f10(1000, v9);
        }
    }
}
new C0();
gc();
