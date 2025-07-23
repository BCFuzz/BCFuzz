class C1 extends Uint8ClampedArray {
    constructor(a3, a4) {
        super();
        const v7 = new Int32Array(681);
        function f8(a9, a10, a11, a12) {
            const v13 = a9?.constructor;
            try { v13(a9); } catch (e) {}
            return C1;
        }
        f8();
        v7.map(f8);
    }
}
new C1();
for (let i = 0; i < 10; i++) {
    new C1();
}
gc();
