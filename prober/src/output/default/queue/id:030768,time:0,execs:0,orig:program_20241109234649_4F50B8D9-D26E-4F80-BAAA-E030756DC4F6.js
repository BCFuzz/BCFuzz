for (let i3 = 1024, i4 = 10; i4--, 3 < i4;) {
}
const v12 = Float64Array.length;
const v13 = v12 ** v12;
const o16 = {
    "maxByteLength": 3614,
};
const v18 = new SharedArrayBuffer(3614, o16);
const v20 = new Int32Array(v18);
const v24 = createGlobalObject().Atomics.wait(v20, v20, v13);
for (let i27 = 0, i28 = 512; i27 < i28; i28--) {
}
([0.4997777833453353,-1000000.0,-1.7976931348623157e+308,0.9212164445900963,117624.44642554666,-5.0,-508215.71841551695,Infinity,-1000000000.0,Infinity]).toLocaleString(v24);
for (let i39 = 0, i40 = 13260; i39 < i40; i40--) {
}
gc();
