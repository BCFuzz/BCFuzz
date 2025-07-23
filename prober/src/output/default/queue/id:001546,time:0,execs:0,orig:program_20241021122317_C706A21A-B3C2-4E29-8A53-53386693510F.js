function f0() {
    async function f1(a2, a3) {
        return f0;
    }
    return f1;
}
f0();
f0();
const v8 = new Uint8Array(1024);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v8;
}
const v15 = new F9();
for (const v17 of v15.d) {
}
gc();
