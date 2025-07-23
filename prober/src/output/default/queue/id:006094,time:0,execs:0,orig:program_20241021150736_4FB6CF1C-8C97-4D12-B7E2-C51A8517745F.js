function f0() {
    return f0;
}
for (let v1 = 0; v1 < 10; v1++) {
    let v3;
    try { v3 = Float32Array.from(); } catch (e) {}
    for (let v4 = 0; v4 < 1000; v4++) {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = F5.__defineSetter__;
    let v8;
    try { v8 = v7(); } catch (e) {}
    const v9 = new F5();
    try { v9.constructor(v9, F5, v8, v3); } catch (e) {}
    const v11 = new F5();
    const v12 = v11.__defineGetter__;
    let v13;
    try { v13 = v12(f0, v8); } catch (e) {}
    const v14 = v11.constructor;
    const v15 = v14.toString(v13, v14, v14);
    const v18 = new Int16Array(v13, v1, v15.match(f0, f0, v14, v15, F5));
    const v19 = new Int16Array();
    const v24 = Reflect.apply(v19.copyWithin, v18, v14).fill().constructor;
    try { v24(f0, f0, Int16Array, v24, v24); } catch (e) {}
}
gc();
