function f0() {
}
const v3 = new WeakSet();
const v4 = v3.add;
function f5() {
    const v8 = new Int16Array(1880);
    for (const v9 in v8) {
    }
    const o10 = {
    };
    o10.f = v3;
    o10.d = f0;
    o10.e = v4;
    for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
        const v23 = createGlobalObject().Atomics;
        try { v23.load(); } catch (e) {}
        try { v23.load(v8, 1880); } catch (e) {}
    }
}
f5();
class C27 {
}
f5();
gc();
