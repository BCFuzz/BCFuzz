function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = `
        const v5 = new Uint8ClampedArray();
        const v6 = v5.constructor;
        try { v6(); } catch (e) {}
    `;
    eval(v3);
}
class C10 extends F0 {
}
new C10();
gc();
