function f1(a2) {
    return WeakMap;
}
const v4 = Symbol.toPrimitive;
WeakMap[v4] = f1;
const v5 = new WeakMap();
const v6 = [v4,v4,v4,v4,v4];
const v7 = [f1,f1,f1];
const v8 = [v6,v6,v5,WeakMap];
const o9 = {
    __proto__: v8,
    1715204274: v7,
};
try { new Int32Array(o9); } catch (e) {}
gc();
