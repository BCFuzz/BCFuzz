for (let i2 = -256;
    (() => {
        const v5 = new SharedArrayBuffer();
        const v7 = new DataView(v5);
        try { v7.setUint32(536870887, 536870887, 8); } catch (e) {}
        return i2 < 8;
    })();
    i2++) {
}
gc();
