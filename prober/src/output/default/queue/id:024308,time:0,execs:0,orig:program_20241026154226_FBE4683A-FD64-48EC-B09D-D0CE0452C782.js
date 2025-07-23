const o19 = {
    set d(a1) {
        const o4 = {
            "get": 5,
        };
        const v6 = new Proxy(RegExp, o4);
        try { new Float32Array(v6); } catch (e) {}
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
    },
};
o19.d = o19;
gc();
