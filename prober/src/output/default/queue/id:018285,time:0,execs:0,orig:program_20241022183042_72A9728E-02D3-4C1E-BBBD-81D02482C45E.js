const v2 = ["1073741825","1073741825"];
const v3 = ["07x5","07x5","07x5","07x5",v2];
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try { a7.flatMap(); } catch (e) {}
}
const v10 = new F4(v2, v3);
const t7 = v10.constructor;
new t7("07x5", "07x5");
new F4("1073741825", "07x5");
new F4("07x5", v10);
const v17 = new Uint8Array(3129);
for (const v18 in v17) {
}
gc();
