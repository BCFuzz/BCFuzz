const v1 = Symbol.toPrimitive;
const v2 = [128,-536870912,-6];
v2.compactDisplay = v1;
const v3 = [4294967295,1073741823,14,-24308,9,-24440,257,-65537];
const v4 = [108790335,41750,16,-17250,6,5,2,-1354796229];
const v5 = v3[3484];
try { v4.toLocaleString(v5, v2); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 !== i10; i10--) {
}
gc();
