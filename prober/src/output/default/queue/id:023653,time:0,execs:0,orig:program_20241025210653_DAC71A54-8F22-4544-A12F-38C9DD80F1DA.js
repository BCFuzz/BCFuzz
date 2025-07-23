for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = [Date,Date,Date,Date,Date];
const o12 = {
};
o12.toJSON = v11;
delete o12.toJSON;
const v15 = Date(Math);
const o16 = {
    [Math]: v15,
    "h": o12,
};
JSON.stringify(o16);
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
