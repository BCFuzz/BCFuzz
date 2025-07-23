const v1 = new WeakSet();
function f2(a3) {
    const o6 = {
        "maxByteLength": 2312845920,
    };
    const v8 = new ArrayBuffer(750704325, o6);
    return v8;
}
f2();
const v10 = f2(f2);
f2();
f2(v10);
v1.add(v1);
gc();
