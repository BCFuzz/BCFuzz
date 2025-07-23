for (let i1 = -256;
    (() => {
        const v4 = new SharedArrayBuffer();
        const v6 = new DataView(v4);
        try { v6.getUint32(536870887, 536870887); } catch (e) {}
        return i1 < 8;
    })();
    i1++) {
}
gc();
