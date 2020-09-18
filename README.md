# Posts

Posts is a front end rendering engine, created to be used in conjunction with
[GitHub pages](https://pages.github.com/). This project allows you to easily
create your own repository for posts, while approaching things differently.

## Syntax

A goal of this project is to support a backwards compatible superset of the
[Markdown syntax](https://spec.commonmark.org/). For example, the expression

```latex
% render inline
e^{i\pi} + 1 = 0
```

will normally be rendered as a code block, while Posts displays it as an inline
equation.

## Usage

[Fork this repository](https://github.com/cybercrimineel/posts/fork) and
[enable GitHub pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
. You can now add your posts to the `posts` directory. Navigating to
`<your username>.github.io/posts/?_=example`, will render the
`posts/example.md` file. The default post is called `null.md`.

## Credit

Credit where credit is due.

- [KaTeX](https://github.com/KaTeX/KaTeX)
- [Retro](https://github.com/markdowncss/retro)
- [commonmark.js](https://github.com/commonmark/commonmark.js)
- [highlight.js](https://github.com/highlightjs/highlight.js)