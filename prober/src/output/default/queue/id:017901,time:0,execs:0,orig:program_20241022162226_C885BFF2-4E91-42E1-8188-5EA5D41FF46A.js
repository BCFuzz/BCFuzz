for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = this.constructor;
    try { new v16(a13, a15, a14); } catch (e) {}
}
class C18 extends F10 {
}
new C18();
gc();
