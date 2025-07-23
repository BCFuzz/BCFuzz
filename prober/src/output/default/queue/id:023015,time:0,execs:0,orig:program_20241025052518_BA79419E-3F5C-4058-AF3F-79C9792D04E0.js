const v2 = new Int8Array(1024);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    v7.g = v2;
    const v8 = v7.g;
    v8.buffer;
    for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
        createGlobalObject().Atomics.and(v8);
    }
}
new F3();
gc();
