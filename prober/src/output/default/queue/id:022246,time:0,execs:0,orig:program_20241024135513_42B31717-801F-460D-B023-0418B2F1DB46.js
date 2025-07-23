for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    function f11(a12, a13) {
        return f11;
    }
    const v15 = new Promise(f11);
    for (let v16 = 0; v16 < 10; v16++) {
        v16++;
        const v18 = v16--;
        const v20 = f10 !== v18 ? f10 : v18;
        const v22 = new Set();
        const v24 = v22.union(v22).entries();
        class C25 {
            2359 = v24;
        }
        v15[536870887] = v20;
    }
    return f11;
}
for (let v26 = 0; v26 < 100; v26++) {
    f10();
}
gc();
