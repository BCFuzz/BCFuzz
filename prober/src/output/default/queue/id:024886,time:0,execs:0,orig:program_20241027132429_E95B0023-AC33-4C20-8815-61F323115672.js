for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 25; v10++) {
    function f11() {
        for (let v12 = 0; v12 < 5; v12++) {
            for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
                const v26 = new Int8Array(64);
                v26[10] &= 128;
            }
        }
        for (let v27 = 0; v27 < 10; v27++) {
        }
        return f11;
    }
    f11.call(f11, v10);
}
gc();
