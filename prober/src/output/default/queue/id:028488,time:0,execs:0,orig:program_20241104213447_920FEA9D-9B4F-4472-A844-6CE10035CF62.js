for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
}
const v21 = new Uint8Array();
function f23(a24, a25) {
    const o53 = {
        ...a25,
        "b": a25,
        get a() {
            class C27 {
            }
            let v30 = new BigUint64Array(586);
            for (let v31 of v30) {
                const o32 = {
                };
                function f33() {
                    const v37 = new BigUint64Array(63);
                    const v40 = this.Atomics.exchange(v37, -2.2250738585072014e-308, -9007199254740992n);
                    let v41 = arguments;
                    for (let i44 = 10, i45 = 10; -13369 < i45; i45--) {
                    }
                    ({"b":v30,"e":C27,"f":v41,...v31} = o32);
                    return v40;
                }
                f33();
            }
            return v21;
        },
    };
    let v54;
    try { v54 = o53.b(v21, o53); } catch (e) {}
    return v54;
}
f23(WeakSet, f23);
gc();
