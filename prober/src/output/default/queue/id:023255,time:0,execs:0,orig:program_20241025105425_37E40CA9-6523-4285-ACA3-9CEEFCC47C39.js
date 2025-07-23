function f0() {
}
function f2() {
    return f2;
}
function f3() {
    return f0;
}
Object.defineProperty(f2, "toString", { configurable: true, enumerable: true, get: f3 });
let v4 = [0.18889975918645152,-3.0,-480776.4972616355,6.35612500584149e+307,-6.972029675506799,-144585.27502470324,-1e-15];
function f5(a6, a7) {
    const o8 = {
    };
    const v10 = new Proxy(f2, o8);
    -65536 <= v10;
    return a6;
}
v4[Symbol.toPrimitive] = f5;
const o21 = {
    p(a15, a16, a17, a18) {
        try { this.p(a18); } catch (e) {}
        ++v4;
        return Symbol;
    },
};
o21.p(o21);
gc();
