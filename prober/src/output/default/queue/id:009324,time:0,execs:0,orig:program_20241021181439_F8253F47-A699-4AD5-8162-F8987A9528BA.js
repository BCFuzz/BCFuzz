function f0(a1, a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v7 = 0; v7 < 5; v7++) {
            const v10 = new Uint32Array(v7);
            v10.sort(Array);
        }
    }
    new F3();
    return a1;
}
f0.call();
gc();
