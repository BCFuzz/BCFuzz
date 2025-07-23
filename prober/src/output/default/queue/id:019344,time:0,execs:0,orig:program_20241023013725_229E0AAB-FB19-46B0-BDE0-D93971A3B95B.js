for (let v1 = 0; v1 < 50; v1++) {
    const v2 = new Int32Array(v1);
    function f3(a4, a5, a6, a7) {
        const v8 = /\p{gc=Nd}/mvi;
        try { ("2147483649").trimLeft(); } catch (e) {}
        const v11 = v8.exec("2147483649");
        try { v11.reverse(); } catch (e) {}
    }
    v2.map(f3);
}
gc();
