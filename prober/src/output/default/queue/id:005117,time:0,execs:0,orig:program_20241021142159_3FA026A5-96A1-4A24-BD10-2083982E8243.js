class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = a4.constructor;
    t5(v1);
}
const o8 = {
};
const v10 = new Proxy(F2, o8);
try { new v10(F2); } catch (e) {}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
