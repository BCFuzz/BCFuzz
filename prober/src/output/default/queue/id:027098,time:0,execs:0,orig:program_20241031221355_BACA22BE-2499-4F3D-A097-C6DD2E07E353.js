function f0() {
    return f0;
}
let v1 = [0.18889975918645152,-3.0,-480776.4972616355,6.35612500584149e+307,-6.972029675506799,-144585.27502470324,-1e-15];
function f2(a3, a4) {
    const o5 = {
    };
    const v7 = new Proxy(f0, o5);
    const o8 = {
    };
    v7.__proto__ = o8;
}
const v10 = Symbol.toPrimitive;
v1[v10] = f2;
const o18 = {
    p(a12, a13, a14, a15) {
        try { this.p(v10, a12, a13, Symbol, Symbol); } catch (e) {}
        return ++v1;
    },
};
o18.p(f0, o18, o18);
gc();
