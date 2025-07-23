[];
function f1() {
    const o3 = {
        get e() {
        },
    };
    return o3;
}
for (let v4 = 0; v4 < 100; v4++) {
    f1();
}
gc();
