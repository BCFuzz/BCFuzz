function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this[92];
}
new F0();
[];
[16,-2147483647];
[268435456,1094305286,4294967295,-256,-1024,268435441,6,-47989];
class C8 extends F0 {
}
new C8();
new C8();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = this?.constructor;
    try { new v14(); } catch (e) {}
}
class C16 extends F11 {
}
new C16();
gc();
gc();
