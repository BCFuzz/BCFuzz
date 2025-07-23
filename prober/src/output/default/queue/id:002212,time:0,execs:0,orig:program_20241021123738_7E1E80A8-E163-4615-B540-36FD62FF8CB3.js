function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
typeof v2 === "function";
const v8 = new Uint8Array(210);
for (const v9 of v8) {
}
gc();
