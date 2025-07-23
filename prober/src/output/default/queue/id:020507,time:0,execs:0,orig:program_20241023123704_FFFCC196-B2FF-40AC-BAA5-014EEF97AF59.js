const v0 = [46021,128];
const v1 = [536870888,536870912,1460049186,10000,-41542,-10,4294967295,-187062292,-65536,-2126446281];
function f2(a3, a4, a5, a6) {
    const o12 = {
        __proto__: a3,
        toString(a8, a9, a10) {
            return v0 + this;
        },
    };
    return o12;
}
const v13 = v1.reduce(f2);
try { v13.toString(); } catch (e) {}
gc();
