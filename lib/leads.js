import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const FILE = path.join(process.cwd(), 'data', 'leads.json');

async function readAll() {
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    return [];
  }
}

export async function addLead({ name, services, message, lang }) {
  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    services,
    message,
    lang,
  };
  const all = await readAll();
  all.push(lead);
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(all, null, 2));
  return lead;
}

export async function listLeads() {
  return (await readAll()).reverse();
}
