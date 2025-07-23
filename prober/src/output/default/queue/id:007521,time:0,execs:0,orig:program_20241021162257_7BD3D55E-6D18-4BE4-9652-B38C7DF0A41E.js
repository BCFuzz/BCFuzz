const v1 = ([4294967296,-1037852386,257,10,3,1,374675389,9]).constructor;
class C2 extends v1 {
}
const v3 = new C2();
v3[-1] ||= v1;
const o6 = {
    "maxByteLength": 66,
};
const v8 = new SharedArrayBuffer(66, o6);
const v10 = new Int32Array(v8);
delete v10[34];
gc();
