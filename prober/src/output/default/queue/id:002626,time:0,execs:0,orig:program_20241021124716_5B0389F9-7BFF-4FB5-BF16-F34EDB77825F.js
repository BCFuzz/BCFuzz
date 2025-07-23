const v1 = new Uint8Array();
const v4 = new Int8Array(1024);
const v6 = [];
const v8 = Reflect.apply(v1.join, v4, v6);
try { v8(); } catch (e) {}
gc();
