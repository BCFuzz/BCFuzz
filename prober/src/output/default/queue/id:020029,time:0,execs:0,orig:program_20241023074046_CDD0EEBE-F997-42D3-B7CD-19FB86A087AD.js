for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
    for (let [i19, i20] = (() => {
            const v14 = new SharedArrayBuffer();
            const v16 = new DataView(v14);
            try { v16.getFloat32(11, 9223372036854775807); } catch (e) {}
            return [0, 10];
        })();
        i19 < i20;
        i20--) {
    }
}
gc();
