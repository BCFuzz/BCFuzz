const o2 = {
    "maxByteLength": 6,
};
const v4 = new SharedArrayBuffer(6, o2);
const v6 = new BigUint64Array(v4);
delete v6[[1.7976931348623157e+308,-1e-15,0.11605255196818698,-4.0,-0.6706432676095719,-21.299042989233044,2.220446049250313e-16,5.507875042587472]];
gc();
