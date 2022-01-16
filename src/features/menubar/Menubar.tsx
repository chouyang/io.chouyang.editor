import React from 'react';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {RootState} from "../../app/store";
import {loadImage} from "../../utils";
import menu from './menu';
import {
  clickMenubar,
  hoverMenubar,
  clickMenubarEntry,
  hoverMenubarEntry,
} from './menubarSlice';
import style from './Menubar.module.scss';

export function Menubar() {
  const activeItem = useAppSelector((state: RootState) => state.menubar.activeItem);
  const activeEntry = useAppSelector((state: RootState) => state.menubar.activeEntry);
  const dispatch = useAppDispatch();

  return (
    <div className={style.MenuBar}>
      <ul className={style.MenuList}>
        {menu.map((item: any, key) => (
          <li
            key={key}
            className={[style.MenuItem, activeItem === item.id && style.Active].join(' ')}
          >
            <span
              onClick={() => dispatch(clickMenubar(item.id))}
              onMouseOver={() => dispatch(hoverMenubar(item.id))}
            >
              {item.id === 'logo' ? <strong>{item.label}</strong> : item.label}
            </span>
            {activeItem === item.id && (
              <div className={style.DropDown}>
                {item.children.map((sub: any, subKey: number) =>
                  sub.id ? (
                    <span
                      key={subKey}
                      className={[style.DropDownItem, sub.disabled === false ? '' : style.Disabled].join(' ')}
                      onClick={() => dispatch(clickMenubarEntry(sub.window))}
                      onMouseEnter={() => dispatch(hoverMenubarEntry(sub.id))}
                      onMouseLeave={() => dispatch(hoverMenubarEntry(''))}
                    >
                      <span>
                        {sub.icon && <img src={loadImage(sub.icon)} alt="icon"/>}
                        {sub.label}
                      </span>
                      <span className={style.DropDownSubWrapper}>
                        {sub.shortcut && <span> {sub.shortcut}</span>}
                        <div className={style.DropDownSub}>
                        {activeEntry === sub.id && sub.children && sub.children.map((entry: any, entryKey: number) =>
                          entry.id ? (
                            <span
                              key={entryKey}
                              className={[style.DropDownSubItem, entry.disabled === false ? '' : style.Disabled].join(' ')}
                              onClick={() => dispatch(clickMenubarEntry(entry.window))}
                            >
                              <span>
                                {entry.icon && <img src={loadImage(entry.icon)} alt="icon"/>}
                                {entry.label}
                              </span>
                              {entry.shortcut && <span> {entry.shortcut}</span>}
                            </span>
                          ) : (<hr key={entryKey}/>)
                        )}
                      </div>
                      </span>
                    </span>
                  ) : (<hr key={subKey}/>)
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
