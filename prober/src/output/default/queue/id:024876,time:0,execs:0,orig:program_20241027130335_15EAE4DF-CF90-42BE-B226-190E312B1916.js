const v2 = new Int32Array(1024);
v2.subarray();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F6();
    v8.g = v2;
    const v9 = v8.g;
    for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
        createGlobalObject().Atomics.xor(v9);
    }
}
new F4();
gc();
