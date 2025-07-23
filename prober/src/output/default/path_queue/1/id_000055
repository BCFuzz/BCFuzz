function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0);
async function f6(a7, a8, a9) {
    const o10 = {
    };
    let v12;
    try { v12 = Proxy.constructor(a7, a8, Proxy); } catch (e) {}
    try { F0(); } catch (e) {}
    const v14 = new Proxy(v5, o10);
    function f15(a16) {
        return o10;
    }
    try { f15(v12); } catch (e) {}
    class C18 extends f15 {
    }
    try { C18(); } catch (e) {}
    return await v14;
}
f6();
gc();
