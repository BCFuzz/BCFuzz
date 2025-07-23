function f1() {
    const v2 = [9.812459475013767,-301.54887150716263];
    Reflect.toString = f1;
    const v5 = [Reflect];
    const v6 = ("d").lastIndexOf;
    Reflect.apply(v6, v2, v5);
    return v6;
}
JSON[Symbol.toPrimitive] = f1;
try { JSON.parse(JSON); } catch (e) {}
gc();
