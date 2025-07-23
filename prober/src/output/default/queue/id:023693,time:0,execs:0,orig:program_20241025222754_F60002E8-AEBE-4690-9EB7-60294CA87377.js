const v2 = new Int16Array(3681);
for (const v3 in v2) {
}
const v4 = /\111/mys;
const v5 = v4.toString(3681, v4);
const v7 = new Uint16Array();
v7.toJSON = v5;
JSON.parse(JSON.stringify([v7]));
class C12 {
}
gc();
