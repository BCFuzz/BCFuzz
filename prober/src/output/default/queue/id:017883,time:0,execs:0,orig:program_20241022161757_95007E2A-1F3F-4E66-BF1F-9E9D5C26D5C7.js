function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1("6E");
v4["6E"];
const v8 = new Uint32Array(1000);
for (const v9 in v8) {
}
gc();
