import fs from 'node:fs';
import path from 'node:path';

// The page markup is driven by the site's own script (text fill, EN/AR switch,
// scroll scenes), so it is rendered once on the server and left untouched by React.
const html = fs.readFileSync(path.join(process.cwd(), 'content', 'body.html'), 'utf8');

export default function Page() {
  return <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
