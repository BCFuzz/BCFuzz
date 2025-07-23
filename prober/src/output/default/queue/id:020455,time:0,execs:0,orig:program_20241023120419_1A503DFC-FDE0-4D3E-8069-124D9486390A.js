const o1 = {
};
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9 === a9;
    const v11 = this.__proto__;
    Object.defineProperty(o1, a9, { configurable: true, get: eval, set: eval });
    const v12 = v11.constructor;
    try { new v12(); } catch (e) {}
    eval();
}
new F4(108, 100, 100, 100);
gc();
