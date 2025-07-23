const v0 = [1073741824,1077032230,-1334579700,2144281557,-38138,51445,39137,268435439,-7,9007199254740992];
function f1() {
    class C2 {
    }
    return C2;
}
v0[Symbol.toPrimitive] = f1;
const v6 = new Uint8Array();
try { v6.subarray(v0); } catch (e) {}
gc();
