for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 100; v10++) {
    const v13 = new Uint8Array(v10, v10, v10);
    function f14(a15) {
    }
    Object.defineProperty(v13, "toString", { enumerable: true, value: f14 });
    class C16 extends Uint8Array {
        static {
            super[undefined + v13];
        }
    }
}
gc();
