const v1 = new WeakMap();
function f2(a3, a4, a5, a6) {
    const o8 = {
        get c() {
            return a6;
        },
        __proto__: a4,
    };
    return o8;
}
const v9 = f2();
f2(v1, v9);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
delete v9.c;
gc();
