const o10 = {
    set d(a1) {
        function f2(a3, a4) {
            const v7 = new Uint8Array(1);
            for (const v8 in v7) {
                v7[v8] = v8;
            }
            return a3;
        }
        for (let i = 0; i < 100; i++) {
            f2(this, this);
        }
    },
};
o10.d = o10;
gc();
