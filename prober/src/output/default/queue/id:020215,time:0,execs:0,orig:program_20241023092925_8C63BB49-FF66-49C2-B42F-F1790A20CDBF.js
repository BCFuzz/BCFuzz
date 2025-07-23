const v2 = new Uint32Array();
function f3(a4, a5) {
    a4 * a4;
    const o9 = {
        set b(a8) {
            Object.defineProperty(14, a4, { writable: true, enumerable: true, value: v2 });
        },
    };
    return 14;
}
f3(14);
f3();
for (let i = 0; i < 250; i++) {
}
gc();
