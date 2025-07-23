function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this?.constructor;
    try { new v3(); } catch (e) {}
}
try { new F0(); } catch (e) {}
const v6 = new F0();
const v7 = new F0();
new F0(v6);
v7 || -65535;
const v13 = new Uint8Array(3129);
for (const v14 in v13) {
    const o15 = {
    };
}
gc();
