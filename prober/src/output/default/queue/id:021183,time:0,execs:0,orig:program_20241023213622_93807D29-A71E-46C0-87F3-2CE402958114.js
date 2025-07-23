const v3 = new Date(5);
v3.setUTCHours();
const v5 = v3.toLocaleTimeString();
const v6 = new Uint8Array(5);
v6.setFromBase64(v5);
gc();
