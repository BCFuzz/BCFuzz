const v1 = new Int16Array();
const v4 = !(delete v1[edenGC]);
for (let v5 = 0; v5 < 25; v5++) {
    ("p" + v5).link(v4);
}
gc();
