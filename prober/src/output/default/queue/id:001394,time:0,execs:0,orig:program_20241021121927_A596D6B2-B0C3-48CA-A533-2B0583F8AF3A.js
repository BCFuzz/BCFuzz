const v2 = new Int8Array();
const o3 = {
};
const v5 = new Proxy(v2, o3);
for (let i = 0; i < 5; i++) {
    42 in v5;
}
gc();
