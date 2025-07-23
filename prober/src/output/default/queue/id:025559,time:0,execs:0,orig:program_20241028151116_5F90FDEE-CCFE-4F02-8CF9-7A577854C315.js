let v1 = [175];
function f2(a3, a4) {
    const v7 = new Int32Array(175);
    const v9 = new Int16Array(v7.buffer);
    v9.set(v7);
}
Object.defineProperty(v1, Symbol.toPrimitive, { value: f2 });
v1++;
gc();
