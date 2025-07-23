const v2 = new Int8Array(0, 0);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    v2.subarray(0);
}
new F3();
gc();
