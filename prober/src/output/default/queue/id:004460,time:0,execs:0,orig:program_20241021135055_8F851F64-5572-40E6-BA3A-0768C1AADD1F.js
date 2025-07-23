function f0(a1) {
    const o2 = {
    };
    return o2;
}
const v3 = f0();
const v4 = f0();
const v5 = f0();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a9[536870888];
    a10.arguments = a10;
    this.f = a9;
}
const v12 = new F6(v4, v5, F6);
new F6(v3, v3, v12);
new F6(v3, v4, f0);
gc();
