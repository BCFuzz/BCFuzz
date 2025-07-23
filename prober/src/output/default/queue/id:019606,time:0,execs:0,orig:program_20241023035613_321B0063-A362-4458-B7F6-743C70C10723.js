for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
    for (let v10 = 0; v10 < 25; v10++) {
        for (let [i20, i21] = (() => {
                const v15 = new SharedArrayBuffer();
                const v17 = new DataView(v15);
                try { v17.getFloat64(11, 9223372036854775807); } catch (e) {}
                return [0, 10];
            })();
            i20 < i21;
            i21--) {
        }
    }
}
gc();
