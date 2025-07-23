for (let i1 = -256;
    (() => {
        const o4 = {
            "maxByteLength": 536870887,
        };
        for (let v6 = 0; v6 < 25; v6++) {
        }
        const v7 = new SharedArrayBuffer(129, o4);
        const v9 = new DataView(v7);
        try { v9.getInt16(536870887); } catch (e) {}
        try { v9.setUint32(536870887, 536870887); } catch (e) {}
        return i1 < 8;
    })();
    i1++) {
}
gc();
