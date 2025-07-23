const v2 = new Uint8Array(257);
const v5 = new Uint8ClampedArray(1000);
v5["with"](1, v2);
gc();
