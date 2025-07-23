function f1() {
    function f2(a3) {
        return 4096;
    }
    return f2;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(Uint8Array, "toString", { enumerable: true, get: f1, set: f5 });
const v8 = new Uint8Array(Uint8Array);
const v11 = new Int8Array(255);
for (const v12 in v11) {
    class C13 {
        constructor(a15) {
            const v17 = `
                \`match${C13}getUint32${v8}o${Uint8Array}w\`;
            `;
            const v19 = v17.split(a15);
            v19.reverse();
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    C13[Symbol.toPrimitive] = Date;
    new C13(v12);
}
gc();
