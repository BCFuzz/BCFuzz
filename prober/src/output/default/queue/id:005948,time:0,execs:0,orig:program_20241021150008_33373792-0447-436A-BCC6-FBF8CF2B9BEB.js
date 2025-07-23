function f0(a1) {
    function f2() {
        return f2;
    }
    class C3 {
    }
    const v4 = new C3();
    const v6 = Symbol.iterator;
    const v9 = new Uint8ClampedArray(2502);
    for (const v10 in v9) {
    }
    v6.description;
    const v12 = Symbol.for(a1);
    v4[v6] = f2;
    return v12;
}
const v13 = [f0,f0,f0];
v13[Symbol.toPrimitive] = f0;
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.propertyIsEnumerable(v13);
}
const v19 = new F16();
const v20 = v19.constructor;
new v20(F16, v20);
gc();
