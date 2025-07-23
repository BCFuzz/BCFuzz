function f1() {
    const o2 = {
    };
    o2.matchAll = false;
    o2.b = o2;
    JSON.stringify(o2);
    return f1;
}
try { f1(); } catch (e) {}
for (let i8 = 0, i9 = 10; i8 != i9; i9--) {
}
gc();
