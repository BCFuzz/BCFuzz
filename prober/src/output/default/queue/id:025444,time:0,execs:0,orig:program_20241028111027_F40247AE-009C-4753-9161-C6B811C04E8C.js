for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
    for (let [i18, i19] = (() => {
            const v12 = new SharedArrayBuffer();
            const v14 = new DataView(v12);
            const v15 = v14.setInt32;
            try { v15(); } catch (e) {}
            return [0, 10];
        })();
        i18 < i19;
        i19--) {
    }
}
gc();
