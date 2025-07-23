const v1 = new WeakMap();
function f3(a4, a5) {
    let v6 = 44485;
    for (; v6--;) {
    }
    function f8(a9, a10, a11) {
        return a4;
    }
    const o12 = {
        __proto__: v1,
        "c": "g8",
    };
    for (let v13 = 0; v13 < 5; v13++) {
        f8(o12, v13, v13);
    }
    return v6;
}
f3("g8", f3);
f3("g8", WeakMap);
gc();
