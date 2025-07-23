for (let i1 = -256;
    (() => {
        const t0 = SharedArrayBuffer.constructor();
        new t0(i1);
        const o6 = {
            "maxByteLength": 536870887,
        };
        const v7 = o6.__defineGetter__;
        try { v7(536870887, v7, i1); } catch (e) {}
        const v10 = new SharedArrayBuffer(129, o6);
        const v12 = new DataView(v10);
        try { v12.setUint32(536870887, 536870887); } catch (e) {}
        return i1 < 8;
    })();
    i1++) {
}
gc();
