for (let v1 = 0; v1 < 25; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v4 = 0; v4 < 5; v4++) {
            const v6 = new Float32Array(this, v4);
            let v8;
            try { v8 = BigUint64Array.from(BigUint64Array, F2, this, 7); } catch (e) {}
            for (let i10 = 10, i11 = 10;
                (() => {
                    function f12(a13, a14, a15) {
                        v6.byteLength >>= 7;
                        return i11;
                    }
                    f12(v8, v8);
                    return v1 < i11;
                })();
                i11--) {
            }
        }
    }
    new F2();
}
gc();
