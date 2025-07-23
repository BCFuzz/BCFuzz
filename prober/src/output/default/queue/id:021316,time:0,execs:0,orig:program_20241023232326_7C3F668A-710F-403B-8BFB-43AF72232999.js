function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        const o3 = {
        };
        const v5 = new Proxy(F0, o3);
        try { new v5(); } catch (e) {}
    `;
    eval(v2);
}
new F0();
gc();
