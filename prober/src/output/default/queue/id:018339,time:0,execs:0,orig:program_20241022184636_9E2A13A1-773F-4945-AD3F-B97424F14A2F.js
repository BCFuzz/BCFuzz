const v1 = [128,-536870912,-6];
v1.compactDisplay = "string";
const v2 = [4294967295,1073741823,14,-24308,9,-24440,257,-65537];
const v3 = [108790335,41750,16,-17250,6,5,2,-1354796229];
const v4 = v2[3484];
try { v3.toLocaleString(v4, v1); } catch (e) {}
gc();
