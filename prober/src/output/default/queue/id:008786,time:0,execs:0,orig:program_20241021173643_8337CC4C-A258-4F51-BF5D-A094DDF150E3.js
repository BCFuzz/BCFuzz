for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = [1073741824,-26526];
        try { v6.find(-6615); } catch (e) {}
        const o8 = {
        };
        const v10 = new Proxy(v6, o8);
        v10[1] = v10;
        v10.toReversed();
        let v12 = undefined;
        --v12;
        const o16 = {
            "maxByteLength": 428,
        };
        const v18 = new ArrayBuffer(236);
        new Uint8Array(v18);
        for (let v21 = 0; v21 < 5; v21++) {
            for (let v22 = 0; v22 < 10; v22++) {
            }
        }
    }
    new F2();
}
gc();
