const v1 = Uint8ClampedArray.BYTES_PER_ELEMENT;
const v4 = new ArrayBuffer(77);
const v5 = new Uint8ClampedArray(v4);
v5.indexOf(v1);
gc();
