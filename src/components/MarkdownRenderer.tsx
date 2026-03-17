interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = parseMarkdown(content);
  return <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}

function parseMarkdown(md: string): string {
  let html = md;

  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
    const escaped = escapeHtml(code.trim());
    return `<div class="code-block"><div class="code-header"><span class="code-lang">${lang || 'code'}</span></div><pre><code>${escaped}</code></pre></div>`;
  });

  html = html.replace(/`([^`]+)`/g, (_match, code) => {
    return `<code class="inline-code">${escapeHtml(code)}</code>`;
  });

  html = html.replace(
    /\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,
    (_match, header, _sep, body) => {
      const headers = header.split('|').filter((c: string) => c.trim()).map((c: string) => `<th>${c.trim()}</th>`).join('');
      const rows = body.trim().split('\n').map((row: string) => {
        const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    }
  );

  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  html = html.replace(/^(\d+)\. (.+)$/gm, '<oli>$2</oli>');
  html = html.replace(/((?:<oli>.+<\/oli>\n?)+)/g, (match) => {
    const inner = match.replace(/<\/?oli>/g, (tag) => tag === '<oli>' ? '<li>' : '</li>');
    return `<ol>${inner}</ol>`;
  });

  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.+<\/li>\n?)+)/g, '<ul>$1</ul>');

  html = html.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm, '<p>$1</p>');
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
