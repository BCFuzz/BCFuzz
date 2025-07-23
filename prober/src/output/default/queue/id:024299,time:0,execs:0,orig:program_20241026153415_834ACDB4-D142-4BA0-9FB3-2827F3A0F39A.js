for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = [];
const o11 = {
};
o11.toJSON = v10;
delete o11.toJSON;
const o13 = {
    "h": o11,
};
JSON.stringify(o13);
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
