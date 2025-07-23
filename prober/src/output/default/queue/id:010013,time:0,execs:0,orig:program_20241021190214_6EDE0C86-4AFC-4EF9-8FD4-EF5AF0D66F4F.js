for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let i7 = 0, i8 = 10; i7 != i8; i8--) {
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                function f22() {
                    return a18;
                }
                f22.apply(Float64Array, a18, F16);
                for (let i26 = 0, i27 = 10; i27--, i26 < i27;) {
                }
            }
            new F16();
        }
        return v4;
    })();
    i3--) {
}
gc();
