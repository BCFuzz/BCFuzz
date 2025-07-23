const v1 = new Uint8Array(Uint8Array);
function f2(a3, a4) {
    return a4;
}
v1.constructor = f2.caller;
try { v1.subarray(); } catch (e) {}
gc();
