for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = [1073741824,-26526];
        const o6 = {
        };
        const v8 = new Proxy(v5, o6);
        v8.toReversed();
        let v10 = undefined;
        const v11 = --v10;
        const o12 = {
        };
        o12.c = v11;
        const o15 = {
            "maxByteLength": 428,
        };
        const v17 = new ArrayBuffer(236, o15);
        new Uint8Array(v17);
        for (let v20 = 0; v20 < 5; v20++) {
            for (let v21 = 0; v21 < 10; v21++) {
            }
        }
    }
    new F1();
}
gc();
