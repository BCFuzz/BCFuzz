for (let v0 = 0; v0 < 50; v0++) {
    const v1 = /a\nW/vgi;
    function f2(a3, a4, a5, a6) {
        a3.exec(a6);
        return f2;
    }
    const v9 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
    const v10 = v9.toLocaleString();
    for (let i = 0; i < 5; i++) {
        const o16 = {
            toString(a12, a13) {
                const v14 = a13?.constructor;
                v14(this, this, v14, v1, this);
                return v10;
            },
        };
        o16.toString(v10, false);
        o16.toString(v9, o16);
    }
    const v19 = f2(v1);
    try { v19(f2); } catch (e) {}
}
gc();
