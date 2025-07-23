const v1 = [-1,9,4294967296,65536,10,49592,10];
v1[365] = 64897;
const v4 = new Int8Array(4096);
const v7 = Date(64897);
const o8 = {
    [Math]: v7,
    [v4]: v1,
};
JSON.stringify(o8);
gc();
