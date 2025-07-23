class C0 {
}
function f1() {
    return f1;
}
let v2 = [0.18889975918645152,-3.0,-480776.4972616355,6.35612500584149e+307,-6.972029675506799,-144585.27502470324,-1e-15];
function f3(a4, a5) {
    const o6 = {
    };
    const v8 = new Proxy(f1, o6);
    let v9;
    try { v9 = C0.o(f3, v8, a4, a5); } catch (e) {}
    v8[483841470] = v9;
    return v9;
}
v2[Symbol.toPrimitive] = f3;
const o19 = {
    p(a13, a14, a15, a16) {
        try { this.p(); } catch (e) {}
        ++v2;
        return this;
    },
};
o19.p();
gc();
