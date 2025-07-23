const v1 = [Date,Date,Date,Date,Date];
const v2 = [v1];
const v3 = v1.__proto__;
try { v3(v3, ...v2); } catch (e) {}
function f5() {
    const v8 = new ArrayBuffer(1593);
    const v10 = new Uint8Array(v8);
    return v10;
}
v2[Symbol.iterator] = Date;
class C13 extends Date {
}
const v14 = new C13();
v14.toString = f5;
for (const v16 of v14.toString(f5, v14, Date)) {
}
gc();
