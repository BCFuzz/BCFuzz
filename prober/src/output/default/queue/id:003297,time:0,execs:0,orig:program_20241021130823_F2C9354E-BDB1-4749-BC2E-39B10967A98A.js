const o0 = {
};
function f1() {
    return o0;
}
const t5 = o0.constructor;
t5(f1);
const v6 = new Uint8Array(1024);
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v6;
}
const v13 = new F7();
for (const v15 of v13.d) {
}
gc();
