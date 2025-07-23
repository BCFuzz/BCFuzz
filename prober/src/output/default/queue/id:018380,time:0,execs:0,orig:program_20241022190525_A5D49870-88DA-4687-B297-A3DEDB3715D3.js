const v1 = new WeakMap();
function f2(a3, a4) {
    for (let i = 0; i < 100; i++) {
    }
    const o5 = {
        __proto__: v1,
    };
    for (let v6 = 0; v6 < 5; v6++) {
        try { o5.has(o5); } catch (e) {}
    }
    return WeakMap;
}
f2(v1, v1);
f2(f2, WeakMap);
class C10 {
}
for (let i14 = 1073741824, i15 = 10; -13369 < i15; i15--) {
}
gc();
