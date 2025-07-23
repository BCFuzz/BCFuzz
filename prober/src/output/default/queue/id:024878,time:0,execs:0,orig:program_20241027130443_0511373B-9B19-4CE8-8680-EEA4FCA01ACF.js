function f0() {
    runString();
}
for (let i6 = -3, i7 = 10; i6 < i7; i7--) {
}
function f14() {
    return f14;
}
function f15() {
    return f0;
}
Object.defineProperty(f14, "toString", { configurable: true, enumerable: true, get: f15 });
let v16 = [0.18889975918645152,-3.0,-480776.4972616355,6.35612500584149e+307,-6.972029675506799,-144585.27502470324,-1e-15];
function f17(a18, a19) {
    const o20 = {
    };
    const v22 = new Proxy(f14, o20);
    -65536 <= v22;
}
v16[Symbol.toPrimitive] = f17;
const o33 = {
    p(a27, a28, a29, a30) {
        try { this.p(a29, this, this, f14, a28); } catch (e) {}
        ++v16;
        return a28;
    },
};
o33.p(v16, f14, f14);
gc();
