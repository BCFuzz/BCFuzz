const v1 = /xyz{0,1}/myg;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v1;
}
try { F2.call("268435439"); } catch (e) {}
Array(4096)["toReversed"]().slice(Array, F2);
gc();
