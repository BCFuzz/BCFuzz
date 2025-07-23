function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this?.constructor;
    try { new v3(); } catch (e) {}
}
new F0(F0);
new F0();
const v7 = new F0();
const v8 = v7?.constructor;
try { new v8(); } catch (e) {}
const v12 = new Float32Array(3008);
for (const v13 in v12) {
}
gc();
