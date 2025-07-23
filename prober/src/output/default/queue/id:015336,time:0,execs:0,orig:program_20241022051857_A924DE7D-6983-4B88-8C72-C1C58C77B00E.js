const o2 = {
    "maxByteLength": 2147483648,
};
const v4 = new ArrayBuffer(512, o2);
const v6 = new Int16Array(v4);
const v7 = [8];
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        v6[v7] = a16;
    }
    new F13();
}
new F8();
gc();
