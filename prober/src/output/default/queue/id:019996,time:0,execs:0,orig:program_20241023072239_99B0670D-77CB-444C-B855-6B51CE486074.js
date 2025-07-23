const v2 = new Uint32Array(187);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    v2[1];
    const v8 = new F5();
    v8.g = v2;
    const v9 = v8.g;
    for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
        const v22 = createGlobalObject().Atomics;
        for (let v23 = 0; v23 < 25; v23++) {
        }
        v22.or(v9);
    }
}
new F3();
gc();
