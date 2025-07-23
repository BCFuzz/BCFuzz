const v2 = new Int8Array(1024);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    v7.g = v2;
    const v8 = v7.g;
    for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
        createGlobalObject().Atomics.or(v8);
    }
}
new F3();
gc();
