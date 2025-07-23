class C0 {
}
for (let v1 = 0; v1 < 5; v1++) {
    function f2() {
        const v6 = new Int16Array(v1);
        const v7 = new C0(4096, ...v6, ..."boolean");
        return v7;
    }
    const v8 = [65535];
    for (let i = 0; i < 5; i++) {
        v8.some(f2);
    }
}
gc();
