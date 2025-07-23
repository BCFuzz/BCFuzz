function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1();
const v8 = [-33637,4294967296,89333515,8463,129,4,474010504,9007199254740992,-268435456,-9007199254740990];
function f9() {
    Object.defineProperty(v7, "f", { writable: true, get: f0 });
    return f0;
}
Object.defineProperty(v8, "style", { get: f9 });
const v10 = [4294967295,1073741823,14,-24308,9,-24440,257,-65537];
const v11 = [108790335,41750,16,-17250,6,5,2,-1354796229];
const v12 = v10[3484];
try { v11.toLocaleString(v12, v8); } catch (e) {}
gc();
