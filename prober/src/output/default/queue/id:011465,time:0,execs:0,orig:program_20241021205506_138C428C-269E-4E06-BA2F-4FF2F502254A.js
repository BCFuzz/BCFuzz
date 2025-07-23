const v0 = [4096,4,10212,-10,9007199254740990,16523,3];
function f1(a2) {
    return v0;
}
const v4 = String.prototype;
v4[Symbol.toPrimitive] = f1;
try { v4.substring(f1); } catch (e) {}
gc();
