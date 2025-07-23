const v3 = new Int8Array();
const v6 = v3.at(255);
let v7 = -14;
const v11 = ((v7++ + v7) * v6) | v7;
class C13 extends Float32Array {
    ["16"];
    #e;
    #d = v11;
}
try { new C13(); } catch (e) {}
gc();
