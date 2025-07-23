function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
        try { this.m(F0, v2, v2, v2, this); } catch (e) {}
    }
}
const v4 = [F0,F0,F0];
function f5(a6, a7) {
    let v8 = 44485;
    for (; v8--;) {
    }
    async function* f10(a11, a12, a13) {
    }
    for (let v14 = 0; v14 < 5; v14++) {
        const v15 = f10(v4, v14, v8);
        v15 >> v15;
        new F0();
        v4[f10] = v15;
    }
    return v8;
}
f5();
f5();
gc();
