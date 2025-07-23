const v2 = new Set();
class C4 extends WeakMap {
}
const v5 = new C4();
const v6 = -37629 << -37629;
function f7(a8, a9, a10, a11) {
    -a9;
    try { a11.set(f7, a8); } catch (e) {}
    const o16 = {
        3: v2,
        set g(a15) {
        },
        __proto__: v5,
    };
    return o16;
}
const v17 = f7(-37629, v5, v2, f7);
function f19() {
    const v20 = delete v17[268435441];
    for (let v21 = 0; v21 < 100; v21++) {
        f7(v6, v20, f19, v17);
    }
    return v20;
}
f19();
Object.defineProperty(Reflect, Symbol.toPrimitive, { get: f19 });
try { Reflect.defineProperty(Reflect, Reflect); } catch (e) {}
gc();
