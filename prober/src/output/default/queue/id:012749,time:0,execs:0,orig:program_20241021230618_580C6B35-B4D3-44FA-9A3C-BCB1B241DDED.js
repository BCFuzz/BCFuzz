for (let v1 = 0; v1 < 5; v1++) {
    const v2 = /a.xyz{0,1}r+/dvs;
    const v3 = /a\nW/vgi;
    function f4(a5, a6, a7, a8) {
        a5.test();
        return a8;
    }
    f4(v3);
    f4(v2);
    v2.test("-1073741824");
}
gc();
