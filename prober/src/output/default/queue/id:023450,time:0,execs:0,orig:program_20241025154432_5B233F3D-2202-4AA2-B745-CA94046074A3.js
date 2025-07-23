for (let v1 = 0; v1 < 5; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const o6 = {
            "maxByteLength": 138,
        };
        const v8 = new SharedArrayBuffer(12, o6);
        const v10 = new Uint8ClampedArray(v8);
        4 in v10;
    }
    new F2();
}
gc();
