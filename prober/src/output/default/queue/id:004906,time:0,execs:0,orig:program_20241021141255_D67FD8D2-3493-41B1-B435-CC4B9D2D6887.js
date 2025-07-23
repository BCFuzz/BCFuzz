function f0(a1) {
    const o22 = {
        n(a3, a4) {
            const v8 = new Float32Array(130);
            try { v8.sort(Symbol); } catch (e) {}
            for (let i = 0; i < 5; i++) {
                for (let v10 = 0; v10 < 250; v10++) {
                    v10++;
                    v10--;
                }
                function F13(a15, a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v18 = new F13(130, this, F13);
                new F13(Float32Array, v18, this);
                try {
                    super.slice();
                } catch(e21) {
                }
            }
        },
    };
    return o22;
}
const v23 = f0();
const v24 = f0();
function f25(a26, a27) {
    a26.n(v24);
    return v24;
}
f25(v23);
f25(v24);
gc();
