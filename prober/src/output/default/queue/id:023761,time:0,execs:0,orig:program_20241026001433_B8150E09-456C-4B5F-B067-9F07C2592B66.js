function f1() {
    const v2 = [9.812459475013767,-301.54887150716263];
    const v7 = new Proxy(Float32Array, Proxy);
    const o8 = {
        ...v7,
    };
    Reflect.toString = f1;
    const v9 = [Reflect];
    function f10(a11) {
        return a11;
    }
    Reflect.apply(("d").lastIndexOf, v2, v9);
}
JSON[Symbol.toPrimitive] = f1;
try { JSON.parse(JSON); } catch (e) {}
gc();
