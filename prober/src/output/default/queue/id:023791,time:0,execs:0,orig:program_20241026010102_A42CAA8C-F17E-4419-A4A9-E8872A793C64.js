const v1 = createGlobalObject();
for (let v2 = 0; v2 < 50; v2++) {
    function f3(a4) {
        return a4;
    }
    const v5 = f3(createGlobalObject);
    const v6 = f3(v2);
    const v7 = f3();
    function F8(a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        a12.arguments = a12;
    }
    new F8(v6, v7, F8);
    new F8(v5, v5, v1);
}
gc();
