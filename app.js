// Shim de compatibilidad: Hostinger tiene configurado app.js como entry.
// La app real vive en server.js — este archivo solo la arranca.
require('./server.js');
