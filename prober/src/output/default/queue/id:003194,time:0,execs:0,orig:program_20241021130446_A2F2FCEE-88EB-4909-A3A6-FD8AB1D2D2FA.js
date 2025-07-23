function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
v5 === "pqwpR";
const v10 = new Uint8Array(1024);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v10;
}
const v17 = new F11(F11, F0, F0, v5);
for (const v19 of v17.d) {
}
gc();
