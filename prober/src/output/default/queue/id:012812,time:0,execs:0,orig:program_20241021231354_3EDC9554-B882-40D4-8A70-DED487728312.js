function f0() {
    return f0;
}
const v2 = new Uint8ClampedArray();
function f3(a4) {
    Object.defineProperty(a4, 3006, { writable: true, set: f0 });
    return v2;
}
v2.toString = f3;
const v5 = [128,-536870912,-6];
v5.useGrouping = v2;
const v6 = [4294967295,1073741823,14,-24308,9,-24440,257,-65537];
const v7 = [108790335,41750,16,-17250,6,5,2,-1354796229];
const v8 = v6[3484];
try { v7.toLocaleString(v8, v5); } catch (e) {}
for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
}
gc();
