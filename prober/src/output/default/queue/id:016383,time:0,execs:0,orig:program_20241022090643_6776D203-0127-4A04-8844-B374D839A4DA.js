for (let [i24, i25] = (() => {
        function f0() {
            return f0;
        }
        function F1(a3, a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v6 = new F1(f0, F1, F1);
        const v8 = v6.constructor.toString();
        for (let i16 = (() => {
                let v9 = 10;
                for (; v9--;) {
                    new BigInt64Array(v9, v9);
                    try { new BigUint64Array(v8, v8, f0); } catch (e) {}
                }
                return 0;
            })();
            i16 < 6;
            i16++) {
        }
        return [0, 10];
    })();
    i24 < i25;
    i25--) {
}
gc();
