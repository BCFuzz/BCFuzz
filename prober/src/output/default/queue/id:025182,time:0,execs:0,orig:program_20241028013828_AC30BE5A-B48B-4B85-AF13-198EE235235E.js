const v1 = [1073741825,640,-15259];
const o4 = {
    "maxByteLength": 4067,
};
const v6 = new SharedArrayBuffer(4067, o4);
const v7 = new Uint16Array(v6);
v7.set(v1);
gc();
