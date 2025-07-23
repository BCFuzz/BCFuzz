for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function f10(a11, a12) {
    for (let i15 = -3, i16 = 10;
        (() => {
            const v17 = i15 < i16;
            function F19() {
                if (!new.target) { throw 'must be called with new'; }
                this.a4 = BigInt64Array;
            }
            const v21 = new F19();
            const v22 = new F19();
            for (const v23 in v22) {
                for (let v24 = 0; v24 < 5; v24++) {
                    const o25 = {
                    };
                    for (let v27 = 0; v27 < 10; v27++) {
                    }
                    const v28 = new Proxy(v21, o25);
                    v28[v23] = o25;
                }
            }
            return v17;
        })();
        i16--) {
    }
    return a11;
}
f10(f10, f10);
new Promise(f10);
gc();
