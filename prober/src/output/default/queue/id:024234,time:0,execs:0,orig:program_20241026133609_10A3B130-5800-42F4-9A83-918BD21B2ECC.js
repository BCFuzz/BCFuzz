function f2(a3, a4, a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        switch (a4) {
            case true:
                break;
        }
        f2();
    }
    return a4;
}
Uint8ClampedArray.toString = f2;
function F8(a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.propertyIsEnumerable(Uint8ClampedArray);
}
class C12 extends F8 {
}
try { new C12(); } catch (e) {}
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
for (let i26 = 0, i27 = 10; i26 < i27; --i27) {
}
gc();
