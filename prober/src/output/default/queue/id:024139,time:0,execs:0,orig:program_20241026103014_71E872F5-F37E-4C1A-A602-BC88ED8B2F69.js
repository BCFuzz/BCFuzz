for (let v0 = 0; v0 < 5; v0++) {
    function f1(a2, a3, a4, a5) {
        const o29 = {
            toString(a7, a8) {
                const o18 = {
                    n(a11, a12, a13) {
                        const v14 = this;
                        const t7 = v14.Intl.Segmenter;
                        const v17 = new t7();
                        return v17;
                    },
                };
                const v19 = o18.n;
                const v20 = v19(a3, v0, a5, a8, o18);
                const v21 = v20.segment(a3, v19);
                const v22 = [7.557860512229595,-1e-15,319.89261808269794];
                const v23 = v20.segment(v19, o18, a3);
                function f24(a25, a26) {
                    a25(1, a26, a26, ...v22, ...v21);
                    return a4;
                }
                v23.toString = f24;
                try { v23.toLocaleString(this, this, v0, this, f1); } catch (e) {}
                return a4;
            },
        };
        o29.toString();
        return f1;
    }
    f1();
    function F32(a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
        ([-2,257,4,2,-7011,28973,-9007199254740991,-65535]).find(edenGC);
    }
    new F32(v0, v0);
}
gc();
