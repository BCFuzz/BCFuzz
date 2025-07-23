for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = [1073741824,-26526];
        const o6 = {
        };
        const v8 = new Proxy(v5, o6);
        v8.toReversed();
        for (let v10 = 0; v10 < 5; v10++) {
            const v13 = new Uint32Array(v10, a3);
            const v14 = new Uint32Array(Array);
            Int16Array[2] = v13;
            try { v14.toLocaleString(Int16Array); } catch (e) {}
            for (let v17 = 0; v17 < 5; v17++) {
            }
        }
    }
    new F1(v0, F1);
}
gc();
