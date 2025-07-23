function f0(a1, a2, a3) {
    const o4 = {
    };
    for (let v5 = 0; v5 < 25; v5++) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v10 = new F6(F6, f0);
        o4[v10] /= v5;
        for (let v11 = 0; v11 < 5; v11++) {
        }
    }
    return f0;
}
const v12 = f0();
f0(f0, v12, v12);
gc();
