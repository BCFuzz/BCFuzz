for (let i1 = -256;
    (() => {
        const v4 = new SharedArrayBuffer();
        const v6 = new DataView(v4);
        try { v6.setFloat16(536870887, v6); } catch (e) {}
        return i1 < 8;
    })();
    i1++) {
}
gc();
