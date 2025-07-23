for (let v0 = 0; v0 < 25; v0++) {
    for (let v2 = 0; v2 < 5; v2++) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            const o7 = {
                "maxByteLength": 138,
            };
            const v9 = new SharedArrayBuffer(12, o7);
            const v11 = new Uint8ClampedArray(v9);
            4 in v11;
        }
        new F3();
    }
}
gc();
