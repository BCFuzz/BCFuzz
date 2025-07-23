const v1 = this.constructor;
function f2(a3, a4, a5) {
    let v6;
    try { v6 = a4.call(v1, a4); } catch (e) {}
    const v8 = a3.bind(a5, this, v6, v6, a3).apply;
    try { v8.apply(v8); } catch (e) {}
    for (let i = 0; i < 100; i++) {
    }
    return f2;
}
f2(f2, f2);
gc();
