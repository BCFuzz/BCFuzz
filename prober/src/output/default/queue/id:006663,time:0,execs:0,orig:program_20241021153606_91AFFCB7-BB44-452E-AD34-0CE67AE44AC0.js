const v0 = [268435440];
function f1(a2, a3, a4, a5) {
    return v0;
}
const v6 = f1.constructor();
const v8 = new Int8Array();
function f10() {
    async function* f11(a12, a13) {
        return v6;
    }
}
Error[Symbol.toPrimitive] = f10;
Object.defineProperty(Int8Array, Symbol.iterator, { configurable: true, enumerable: true, value: Error });
const v18 = v0.copyWithin();
try { v6(65536, v18, ...v8, ...Int8Array); } catch (e) {}
for (let v20 = 0; v20 < 10; v20++) {
    ("p" + v20).charAt(Error);
}
gc();
