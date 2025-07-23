class C0 {
}
const v1 = new C0();
const v2 = [52015,-65535,13,1073741825,-31321,129,-65536,512,1073741823,-4096];
const v3 = [65535,0,1024];
const v4 = [-206244596,1224306032,1073741823,-4294967297,1342699513,268435441,-2,110716818,-1235551687];
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        new Uint8ClampedArray(v2);
        return f10;
    }
    a8[Symbol.toPrimitive] = f10;
    a9[268435441] = v4;
    try { this.propertyIsEnumerable(a7); } catch (e) {}
    a8[3] = a8;
}
new F5(v2, v2, v1);
new F5(v3, v4, v2);
new F5(v4, v3, F5);
gc();
