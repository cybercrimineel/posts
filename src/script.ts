import { HtmlRenderer, Parser } from 'commonmark';
import { renderToString } from 'katex';
import { highlightBlock } from 'highlight.js';

fetch(`posts/${new URLSearchParams(location.search).get('_')}.md`)
    .then(response => response.text())
    .then(value => {
        document.body.innerHTML = new HtmlRenderer().render(new Parser({ smart: true }).parse(value));
        document.title = document.querySelector('h1')?.innerHTML;

        document.querySelectorAll('pre>code').forEach(element => {
            if (element.classList.contains('language-latex')) {
                const parent = element.parentElement;

                switch (/^\s*%\s*render\s+([^\s]+)\s*$/.exec(element.innerHTML.split('\n')[0])[1]) {
                    case 'block':
                        parent.outerHTML = `<p>${renderToString(element.innerHTML)}</p>`;
                        break

                    case 'inline':
                        let child = parent.previousElementSibling;
                        const node = document.createElement('P');

                        if (child?.tagName === 'P') {
                            node.innerHTML = child.innerHTML;
                            child.remove();
                        }

                        node.innerHTML = `${node.innerHTML} ${renderToString(element.innerHTML)}`;
                        child = parent.nextElementSibling;

                        if (child?.tagName === 'P') {
                            node.innerHTML = `${node.innerHTML}${/\w/.test(child.innerHTML[0]) ? ' ' : ''}${child.innerHTML}`;
                            child.remove();
                        }

                        parent.parentNode.replaceChild(node, parent);
                        break
                }
            } else {
                highlightBlock(element as HTMLElement);
            }
        });
    });