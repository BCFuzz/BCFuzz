const v3 = new BigUint64Array(6);
try { v3.sort(Int16Array); } catch (e) {}
try { Uint8Array.fromHex(129); } catch (e) {}
gc();
