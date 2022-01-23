import React              from 'react';
import { useAppSelector } from "app/hooks";
import { RootState }      from "app/store";
import ActionBar          from './action-bar/ActionBar';
import FileTree           from './file-tree/FileTree';
import { selectFile }     from '../toolWindowSlice';
import styles             from './ToolPanel.module.scss';

export type File = {
  id: string,
  name: string,
  extra?: string,
  icon?: string,
  children?: File[],
}

const tree: File = {
  id:       'chouyang.io',
  name:     'chouyang.io',
  extra:    '~/Workspace/chouyang.io',
  children: [
    { id: 'deploy', name: 'deploy', icon: 'filetype/folder.svg' },
    { id: 'ide', name: 'ide', icon: 'filetype/folder.svg' },
    {
      id: 'src', name: 'src', icon: 'filetype/folder.svg', children: [
        { id: 'errors', name: 'errors', icon: 'filetype/folder.svg' },
        { id: 'http', name: 'http', icon: 'filetype/folder.svg' },
        { id: 'types', name: 'types', icon: 'filetype/folder.svg' },
        { id: 'ginger.go', name: 'ginger.go', icon: 'filetype/go.svg' },
      ],
    },
    {
      id:       'articles', name: 'articles',
      children: [
        {
          id:       'go-programming-language',
          name:     'go-programming-language',
          children: [
            { id: 'going-home-01', name: 'GoBigOrGoHome01.go', icon: 'filetype/go.svg' },
            { id: 'going-home-02', name: 'GoBigOrGoHome02.go', icon: 'filetype/go.svg' },
            { id: 'going-home-03', name: 'GoBigOrGoHome03.go', icon: 'filetype/go.svg' },
          ]
        },
      ]
    },
    { id: '.env.example', name: '.env.example' },
    { id: 'gitignore', name: '.gitignore', icon: 'filetype/ignore.svg' },
    { id: 'docker-compose.yml', name: 'docker-compose.yml', icon: 'filetype/docker-compose-file.svg' },
    {
      id:   'docker-compose-production.yml',
      name: 'docker-compose-production.yml',
      icon: 'filetype/docker-compose-file.svg'
    },
    {
      id: 'go.mod', name: 'go.mod', icon: 'filetype/text.svg', children: [
        { id: 'go.sum', name: 'go.sum', icon: 'filetype/text.svg' },
      ]
    },
    { id: 'main.go', name: 'main.go', icon: 'filetype/go.svg' },
    { id: 'readme.md', name: 'README.md', icon: 'filetype/markdown.svg' },
  ]
}

const ToolPanel = () => {
  const selectedFile = useAppSelector((state: RootState) => state.tool.selectedFile)
  return (
    <div className={ styles.ToolPanel }>
      <ActionBar/>
      <FileTree
        tree={ tree }
        isOpen
        selectFile={ selectFile }
        selectedFile={ selectedFile }
      />
    </div>
  )
}

export default ToolPanel;
