const v2 = new Map();
function f3(a4, a5, a6, a7) {
    const o15 = {
        m(a9, a10, a11) {
            Reflect.construct(Map, [v2], a11);
            return a4;
        },
    };
    return o15;
}
const v16 = f3(v2, 0.4885627406642974, Map, f3);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.m(0.4885627406642974, 0.4885627406642974, a20); } catch (e) {}
}
new F17(v16, f3);
gc();
