const v3 = new Date();
v3.setUTCHours();
const v5 = v3.toLocaleTimeString();
const v6 = new Uint8Array(8);
v6.setFromBase64(v5);
gc();
