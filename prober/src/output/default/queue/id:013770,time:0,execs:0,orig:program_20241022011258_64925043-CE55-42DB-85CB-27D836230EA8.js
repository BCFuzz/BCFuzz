for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let i7 = 0, i8 = 10;
            (() => {
                const v9 = i7 < i8;
                const v11 = new Int32Array();
                function f12() {
                    function f13() {
                        return i8;
                    }
                    return f13;
                }
                function f14(a15) {
                    return f12;
                }
                Object.defineProperty(v11, "constructor", { get: f12, set: f14 });
                function f16(a17, a18, a19, a20) {
                    return f12;
                }
                v11.map(f16);
                return v9;
            })();
            i8--) {
        }
        return v4;
    })();
    i3--) {
}
gc();
