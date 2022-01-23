import React                          from 'react';
import ReactMarkdown                  from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs }                         from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm                            from 'remark-gfm';
import Gutter                         from 'features/editor/gutter/Gutter';
import styles                         from './Editor.module.scss';

function Editor() {

  const code = `### chouyang.io

# Inspired by JetBrains IDEs.

~~~shell
# fire up
docker-compose up -d
~~~
`;

  const components = {
    code(props: any) {
      const match = /language-(\w+)/.exec(props.className || '')
      return !props.inline && match ? (
        <SyntaxHighlighter style={ vs } language={ match[1] } PreTag="div"
                           children={ String(props.children).replace(/\n$/, '') } { ...props } />
      ) : (<code className={ props.className } { ...props } />)
    }
  }

  return (
    <div className={ styles.Editor }>
      <Gutter/>
      <ReactMarkdown
        className={ styles.Markdown }
        plugins={ [gfm] }
        children={ code }
        linkTarget="_blank"
        components={ components }
      />
    </div>
  );
}

export default Editor;
