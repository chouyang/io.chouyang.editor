import React, { useEffect } from 'react';
import ReactMarkdown        from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs }                         from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm                            from 'remark-gfm';
import Gutter                         from 'features/editor/gutter/Gutter';
import { useAppSelector }             from "../../app/hooks";
import { RootState }                  from "../../app/store";
import styles                         from './Editor.module.scss';

const getMdModifier = (name: string) => {
  const ext = name.split('.').pop();
  return {
    mod: 'go',
  }[ext || ''] || ext;
}

const wrapContent = (name: string, content: string) => {
  return `\`\`\`${getMdModifier(name)}\n${content}\n\`\`\``;
}

function Editor() {
  const [content, setContent] = React.useState(`### 

# ${process.env.REACT_APP_NAME}
### Inspired by JetBrains IDEs.

~~~shell
# fire up
docker-compose up -d
~~~
`);

  const opened = useAppSelector((state: RootState) => state.app.opened);

  useEffect(() => {
    if (opened) {
      if (content) {
        setContent(wrapContent(opened.name, opened.content));
      }
    }
  }, [opened, content]);

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
      <div className={styles.Wrapper}>
        <Gutter/>
        <ReactMarkdown
          className={ styles.Markdown }
          plugins={ [gfm] }
          children={ content }
          linkTarget="_blank"
          components={ components }
        />
      </div>
    </div>
  );
}

export default Editor;
