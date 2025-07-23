for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
}
const v21 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
function f23(a24, a25) {
    const o37 = {
        ...a25,
        "b": a25,
        get a() {
            function f28() {
                const v32 = new Int8Array(63);
                this.Atomics.exchange(v32, -2.2250738585072014e-308, -9007199254740992n);
                return v32;
            }
            f28();
            return a25;
        },
    };
    try { o37.b(v21, o37); } catch (e) {}
    return o37;
}
f23(WeakSet, f23);
gc();
