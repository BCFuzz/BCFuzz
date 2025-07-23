for (let i2 = -256;
    (() => {
        const v5 = new SharedArrayBuffer();
        const v7 = new DataView(v5);
        try { v7.getUint16(536870887, 536870887); } catch (e) {}
        return i2 < -1;
    })();
    i2++) {
}
gc();
