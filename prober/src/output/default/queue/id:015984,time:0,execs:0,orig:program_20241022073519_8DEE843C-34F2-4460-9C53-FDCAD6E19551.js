function f0(a1) {
    const v3 = new Int8Array();
    const v5 = new Uint8Array();
    const t3 = createGlobalObject().Float16Array;
    const v9 = new t3(v3, v5, Int8Array);
    const t5 = v9.constructor;
    const v11 = new t5();
    try { v11["asinh"](); } catch (e) {}
    for (let v14 = 0; v14 < 10; v14++) {
    }
}
([3.6678067847652756,-3.3588036264140016e+307,5.730101676166519e+306,-1000000000.0,0.21287490118238417,-1.5994042304030588e+308,2.2250738585072014e-308,0.0]).flatMap(f0);
gc();
