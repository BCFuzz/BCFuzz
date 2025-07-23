const v2 = new Uint16Array(1024);
v2.subarray();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
v6.g = v2;
const v7 = v6.g;
createGlobalObject().Atomics.exchange(v7);
gc();
