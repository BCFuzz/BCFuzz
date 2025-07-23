for (let i = 0; i < 25; i++) {
    function f0(a1, a2, a3, a4) {
        const v6 = new Int32Array(a4, a1, a3);
        const v9 = (0.0).constructor.isInteger(v6);
        const o12 = {
            get e() {
                return a1(this, this, v9);
            },
        };
        return Int32Array;
    }
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
    for (let v23 = 0; v23 < 5; v23++) {
        f0();
    }
}
gc();
