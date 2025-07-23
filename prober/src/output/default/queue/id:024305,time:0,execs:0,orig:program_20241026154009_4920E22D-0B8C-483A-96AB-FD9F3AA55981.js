function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o3 = {
    };
    class C5 extends o3.constructor {
    }
    const v7 = C5.getOwnPropertyDescriptors(RegExp).multiline;
    try { v7.get(); } catch (e) {}
}
new F0();
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
