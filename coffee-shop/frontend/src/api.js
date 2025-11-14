// Super-simple helpers for json-server (db.json). No errors thrown.
const API = 'http://localhost:5176';

export function createUser(user) {
  return fetch(`${API}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).catch(() => null);
}

export function createOrder(order) {
  return fetch(`${API}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...order, createdAt: new Date().toISOString() }),
  }).catch(() => null);
}


