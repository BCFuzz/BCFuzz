for (let i2 = 0, i3 = 128; i2 < i3; i3--) {
}
const v10 = [128];
const o11 = {
};
o11.toJSON = v10;
delete o11.toJSON;
o11.toJSON = v10;
JSON.stringify(o11);
gc();
