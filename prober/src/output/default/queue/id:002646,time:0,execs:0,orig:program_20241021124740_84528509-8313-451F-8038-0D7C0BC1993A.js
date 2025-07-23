function f1(a2) {
    return a2;
}
function f4(a5, a6) {
    const o7 = {
        4: WeakMap,
        "a": 6,
        6: f1,
        7: WeakMap,
    };
    return f1;
}
for (let v8 = 0; v8 < 25; v8++) {
    f4();
}
gc();
