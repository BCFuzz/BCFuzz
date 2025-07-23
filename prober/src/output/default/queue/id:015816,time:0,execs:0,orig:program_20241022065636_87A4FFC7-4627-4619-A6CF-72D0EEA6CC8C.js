const v1 = new WeakMap();
const v3 = this.constructor;
function f4(a5, a6, a7) {
    let v8;
    try { v8 = a5(); } catch (e) {}
    try { a5(); } catch (e) {}
    let v10;
    try { v10 = a6.call(WeakMap, v8); } catch (e) {}
    try { a6.call(); } catch (e) {}
    const v12 = v3();
    v12.h = v12;
    const v13 = a6.constructor;
    try { v13(WeakMap); } catch (e) {}
    try { v13(v3); } catch (e) {}
    try { v1.call(); } catch (e) {}
    const v17 = a5.toString;
    try { v17(this); } catch (e) {}
    try { v17(); } catch (e) {}
    try { v10(); } catch (e) {}
    let v21 = 3247;
    for (;
        (() => {
            const v22 = v21--;
            v22 - v22;
            return v22;
        })();
        ) {
    }
}
f4(f4, f4);
gc();
