function f0(a1) {
    const v4 = new Int32Array(681);
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        createGlobalObject().Atomics.store(v4, i8, a1);
    }
    const v20 = 1073741823 - a1;
    const v21 = v20 % v20;
    for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
    }
    try { v21(); } catch (e) {}
    for (let v33 = 0; v33 < 250; v33++) {
    }
    return v21;
}
([3.6678067847652756,-3.3588036264140016e+307,5.730101676166519e+306,-1000000000.0,0.21287490118238417,-1.5994042304030588e+308,2.2250738585072014e-308,0.0]).flatMap(f0);
gc();
