const v2 = new Int16Array(16);
const v5 = new Uint32Array(128);
const v6 = v5.__proto__;
let v7;
try { v7 = v6(v2); } catch (e) {}
v5.buffer |= v7;
v5[v7] >>= v7;
v5[6] = v7;
try { v5.subarray(16, 16); } catch (e) {}
const o14 = {
    "maxByteLength": 129,
};
const v16 = new ArrayBuffer(1, o14);
new Uint16Array(v16);
const v19 = new Int8Array(362);
class C20 extends Int8Array {
    static [v5] = Int8Array;
    n(a22, a23, a24) {
        const o25 = {
        };
        new Proxy(v2, o25);
        a24 != 362;
        return this;
    }
    m(a30, a31) {
        const v32 = super.byteLength;
        const v33 = [a30];
        const v35 = [Int8Array,v19,v33,[this,v33,362]];
        const v36 = v33.__proto__;
        let v37;
        try { v37 = v36(a30, v36, a30, v5); } catch (e) {}
        let v38;
        try { v38 = new v37(v32, v35, Uint32Array); } catch (e) {}
        return v38;
    }
}
const v39 = new C20();
new C20();
new C20();
const v46 = [6,268435440,-1872111987,-15,1889378099];
v46[825] = v39;
v46[1873] = 30382n;
for (let v48 of v46) {
    v48 >>= v48;
    v46[v48] = 1;
}
gc();
