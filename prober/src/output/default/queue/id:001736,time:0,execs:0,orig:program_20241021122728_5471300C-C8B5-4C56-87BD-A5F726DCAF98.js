for (let v0 = 0; v0 < 5; v0++) {
}
const v3 = new Int8Array(42);
const o4 = {
};
const v6 = new Proxy(v3, o4);
for (let i = 0; i < 5; i++) {
    42 in v6;
}
gc();
