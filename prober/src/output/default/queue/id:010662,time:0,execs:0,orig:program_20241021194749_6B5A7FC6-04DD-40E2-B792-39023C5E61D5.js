class C0 {
    constructor() {
        const v3 = new Uint8Array();
        const v4 = [v3];
        function f5(a6, a7) {
            return a7;
        }
        const v9 = Date(C0);
        function f11(a12, a13) {
            arguments.e = arguments;
            f5(v4, ...v3, v9, ...arguments);
        }
        Float32Array.toString = f11;
        const t13 = SharedArrayBuffer.constructor;
        t13(Float32Array);
    }
}
new C0();
for (let i22 = 0, i23 = 10; i22 !== i23; i23--) {
}
for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
}
gc();
