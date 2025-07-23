const v2 = new Int8Array();
const v4 = new Uint32Array(v2, 9007199254740992);
v2.fill(v4, 1165234091, 9007199254740992);
gc();
