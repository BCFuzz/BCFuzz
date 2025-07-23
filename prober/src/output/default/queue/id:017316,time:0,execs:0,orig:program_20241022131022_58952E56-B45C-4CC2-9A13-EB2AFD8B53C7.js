const v0 = [1754061190,16,11,256,-62769,-256,8];
function f1() {
    return v0;
}
const o2 = {
    __proto__: v0,
};
Object.defineProperty(v0, 10, { configurable: true, set: f1 });
const v3 = [1073741823];
function f4(a5) {
    a5 >> v3;
    return o2;
}
v3.valueOf = f4;
const v9 = [[5,4,-9,41527,-610397528,-18293,-2079418926,-11,-1238194170],[-9223372036854775808,0,31067,4,1073741823,-9,10,2147483648,-1],v3];
try { new Uint32Array(v9); } catch (e) {}
for (let i14 = 10, i15 = 10; -13369 < i15; i15--) {
}
gc();
