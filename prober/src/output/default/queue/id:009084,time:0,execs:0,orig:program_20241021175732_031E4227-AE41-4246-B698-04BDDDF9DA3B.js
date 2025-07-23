for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    const o12 = {
    };
    const v14 = new Proxy(this, o12);
    const o15 = {
    };
    const v16 = new Proxy(v14, o15);
    const v17 = v16.constructor;
    try { new v17(); } catch (e) {}
}
new F10();
gc();
