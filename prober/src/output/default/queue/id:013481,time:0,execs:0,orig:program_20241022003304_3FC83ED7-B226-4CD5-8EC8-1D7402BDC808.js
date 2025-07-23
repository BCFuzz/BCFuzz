function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
const v6 = v5.constructor;
const v7 = new v6(v6, F0, v5, v6);
Float32Array.toString = v7;
const v9 = [-33637,4294967296,89333515,8463,129,4,474010504,9007199254740992,-268435456,-9007199254740990];
Object.defineProperty(v9, "trailingZeroDisplay", { value: Float32Array });
const v10 = [4294967295,1073741823,14,-24308,9,-24440,257,-65537];
const v11 = [108790335,41750,16,-17250,6,5,2,-1354796229];
const v12 = v10[3484];
try { v11.toLocaleString(v12, v9); } catch (e) {}
gc();
