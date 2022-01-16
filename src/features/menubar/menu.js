const menu = [
  {
    id: 'logo',
    label: ' 丑羊v3.2',
    children: [
      { id: 'about-me', label: 'About 丑羊', window: 'About', disabled: false },
      { id: 'service', label: 'Service', shortcut: '▶' },
      {},
      { id: 'login', label: 'Login...', window: 'Login', disabled: false },
      {},
      { id: 'preference', label: 'Preference...', shortcut: '⌘,' },
      {},
      { id: 'quit', label: 'Quit', shortcut: '⌘Q', window: 'Quit', disabled: false },
    ]
  },
  {
    id: 'file',
    label: 'File',
    children: [
      {
        id: 'new',
        label: 'New',
        shortcut: '▶',
        disabled: false,
        children: [
          { id: 'project', label: 'Project...', disabled: false },
          {},
          { id: 'go-file', label: 'Go File', disabled: false, icon: 'filetype/go.svg' },
          { id: 'php-file', label: 'PHP File', disabled: false, icon: 'filetype/php.svg' },
          { id: 'java-file', label: 'Java File', disabled: false, icon: 'filetype/java.svg' },
          { id: 'python-file', label: 'Python File', disabled: false, icon: 'filetype/python.svg' },
          { id: 'c-file', label: 'C File', disabled: false, icon: 'filetype/c.svg' },
          { id: 'cpp-file', label: 'C++ File', disabled: false, icon: 'filetype/cpp.svg' },
          { id: 'file', label: 'File', disabled: false, icon: 'filetype/text.svg' },
          { id: 'scratch-file', label: 'Scratch File', disabled: false, icon: 'filetype/scratch.svg', shortcut: '⇧⌘N' },
          { id: 'directory', label: 'Directory', disabled: false, icon: 'filetype/directory.svg' },
          {},
          { id: 'html-file', label: 'HTML File', disabled: false, icon: 'filetype/html.svg' },
          { id: 'stylesheet', label: 'Stylesheet', disabled: false, icon: 'filetype/css.svg' },
          { id: 'javascript-file', label: 'JavaScript File', disabled: false, icon: 'filetype/javascript.svg' },
          { id: 'typescript-file', label: 'TypeScript File', disabled: false, icon: 'filetype/typescript.svg' },
        ],
      },
      { id: 'open', label: 'Open...', icon: 'theme/menu-open.svg' },
      { id: 'save-as', label: 'Save As...', shortcut: '⇧⌘S' },
      { id: 'open-recent', label: 'Open Recent', shortcut: '▶' },
      { id: 'close-project', label: 'Close Project' },
      { id: 'rename-project', label: 'Rename Project...' },
      {},
      { id: 'file-property', label: 'File Property', shortcut: '▶' },
      {},
      { id: 'save-all', label: 'Save All', shortcut: '⌘S', icon: 'theme/menu-saveall.svg' },
      { id: 'reload-all-from-disk', label: 'Reload All from Disk', shortcut: '⌃⌘Y', icon: 'theme/refresh.svg' },
      { id: 'invalidate-caches-restart', label: 'Invalidate Caches/Restart...' },
      {},
      { id: 'manage-ide-settings', label: 'Manage IDE Settings', shortcut: '▶' },
      { id: 'new-projects-settings', label: 'New Projects Settings', shortcut: '▶' },
      {},
      { id: 'export', label: 'Export', shortcut: '▶' },
      { id: 'print', label: 'Print...', icon: 'theme/print.svg' },
      { id: 'add-to-favorites', label: 'Add to Favorites', shortcut: '▶' },
      {},
      { id: 'power-save-mode', label: 'Power Save Mode' },
    ]
  },
  {
    id: 'edit',
    label: 'Edit',
    children: [
      { id: 'Undo', label: 'Undo', shortcut: '⌘Z', icon: 'theme/undo.svg' },
      { id: 'redo', label: 'Redo', shortcut: '⇧⌘Z', icon: 'theme/redo.svg' },
      {},
      { id: 'cut', label: 'Cut', shortcut: '⌘X', icon: 'theme/menu-cut.svg' },
      { id: 'copy', label: 'Copy', shortcut: '▶' },
      { id: 'paste', label: 'Paste', shortcut: '▶' },
      { id: 'delete', label: 'Delete', shortcut: '⌦' },
      {},
      { id: 'find', label: 'Find', shortcut: '▶' },
      { id: 'find-usage', label: 'Find Usage', shortcut: '▶' },
      {},
      { id: 'column-selection-mode', label: 'Column Selection Mode', shortcut: '⇧⌘8' },
      { id: 'select-all', label: 'Select All', shortcut: '⌘A' },
      { id: 'add-carets-to-ends-of-selected-lines', label: 'Add Carets to Ends of Selected Lines', shortcut: '⌥⇧G' },
      { id: 'extend-selection', label: 'Extend Selection', shortcut: '⌥↑' },
      { id: 'shrink-selection', label: 'Shrink Selection', shortcut: '⌥↓' },
      {},
      { id: 'toggle-case', label: 'Toggle Case', shortcut: '⇧⌘U' },
      { id: 'join-lines', label: 'Join Lines', shortcut: '⌃⇧J' },
      { id: 'duplicate-lines', label: 'Duplicate Line', shortcut: '⌘D' },
      { id: 'fill-paragraph', label: 'Fill Paragraph' },
      { id: 'sort-lines', label: 'Sort Lines' },
      { id: 'reverse-lines', label: 'Reverse Lines' },
      {},
      { id: 'indent-selection', label: 'Indent Selection', shortcut: '⇥' },
      { id: 'unindent-line-or-selection', label: 'Unindent Line or Selection', shortcut: '⇧⇥' },
      { id: 'convert-indents', label: 'Convert Indents', shortcut: '▶' },
      {},
      { id: 'macros', label: 'Macros', shortcut: '▶' },
      {},
      { id: 'emoji-and-symbols', label: 'Emoji and Symbols', shortcut: '⌃⌘Space' },
      {},
      { id: 'encode-xml-html-special-characters', label: 'Encode XML/HTML Special Characters' },
    ]
  },
  {
    id: 'view',
    label: 'View',
    children: [
      { id: 'tool-window', label: 'Tool Window', shortcut: '▶' },
      { id: 'appearance', label: 'Appearance', shortcut: '▶' },
      {},
      { id: 'quick-definition', label: 'Quick Definition', shortcut: '⌥Space' },
      { id: 'quick-type-definition', label: 'Quick Type Definition' },
      { id: 'quick-documentation', label: 'Quick Documentation', shortcut: 'F1' },
      { id: 'external-documentation', label: 'External Documentation', shortcut: '⇧F1' },
      { id: 'parameter-info', label: 'Parameter Info', shortcut: '⌘P' },
      { id: 'type-info', label: 'Type Info', shortcut: '⌃⇧P' },
      { id: 'content-info', label: 'Content Info', shortcut: '⌃⇧Q' },
      {},
      { id: 'jump-to-source', label: 'Jump to Source', shortcut: '⌘↓', icon: 'theme/edit-source.svg' },
      {},
      { id: 'recent-files', label: 'Recent Files', shortcut: '⌘E' },
      { id: 'recent-changed-files', label: 'Recent Changed Files' },
      { id: 'recent-locations', label: 'Recent Locations', shortcut: '⇧⌘E' },
      { id: 'recent-changes', label: 'Recent Changes', shortcut: '⌥⇧C' },
      {},
      { id: 'compare-with', label: 'Compare With...', shortcut: '⌘D', icon: 'theme/diff.svg' },
      { id: 'compare-with-clipboard', label: 'Compare With Clipboard', icon: 'theme/diff-with-clipboard.svg' },
      {},
      { id: 'quick-switch-schema', label: 'Quick Switch Schema', shortcut: '⌃`' },
      { id: 'active-editor', label: 'Active Editor', shortcut: '▶' },
      {},
      { id: 'bidi-text-base-direction', label: 'Bidi Text Base Direction', shortcut: '▶' },
    ]
  },
  {
    id: 'navigate',
    label: 'Navigate',
    children: [
      { id: 'back', label: 'Back', shortcut: '⌘[', icon: 'theme/back.svg' },
      { id: 'forward', label: 'Forward', shortcut: '⌘]', icon: 'theme/forward.svg' },
      {},
      { id: 'search-everywhere', label: 'Search Everywhere', icon: 'theme/search.svg' },
      {},
      { id: 'class', label: 'Class...', shortcut: '⌘O' },
      { id: 'file', label: 'File...', shortcut: '⇧⌘O' },
      { id: 'symbol', label: 'Symbol...', shortcut: '⌥⌘O' },
      { id: 'line-column', label: 'Line/Column', shortcut: '⌘L' },
      {},
      { id: 'next-highlighted-error', label: 'Next Highlighted Error', shortcut: 'F2' },
      { id: 'previous-highlighted-error', label: 'Previous Highlighted Error', shortcut: '⇧F2' },
      { id: 'previous-highlighted-error', label: 'Previous Highlighted Error', shortcut: '⇧F2' },
      {},
      { id: 'next-emmet-edit-point', label: 'Next Emmet Edit Point', shortcut: '⌃⌥→' },
      { id: 'previous-emmet-edit-point', label: 'Previous Emmet Edit Point', shortcut: '⌃⌥←' },
      { id: 'last-edit-location', label: 'Last Edit Location', shortcut: '⇧⌘⌫' },
      { id: 'next-edit-location', label: 'Next Edit Location' },
      {},
      { id: 'navigate-in-file', label: 'Navigate in File', shortcut: '▶' },
      {},
      { id: 'select-in', label: 'Select In...', shortcut: '⌥F1' },
      { id: 'jump-to-navigation-bar', label: 'Jump to Navigation Bar', shortcut: '⌘↑' },
      {},
      { id: 'declaration-or-usage', label: 'Declaration or Usages', shortcut: '⌘B' },
      { id: 'implementations', label: 'Implementation(s)', shortcut: '⌥⌘B' },
      { id: 'type-declaration', label: 'Type Declaration', shortcut: '⇧⌘B' },
      { id: 'super-method', label: 'Super Method', shortcut: '⌘U' },
      { id: 'test', label: 'Test', shortcut: '⇧⌘T' },
      { id: 'related-symbol', label: 'Related Symbol', shortcut: '⌃⌘↑' },
      {},
      { id: 'file-structure', label: 'File Structure', shortcut: '⌘F12' },
      { id: 'type-hierarchy', label: 'Type Hierarchy', shortcut: '⌃H' },
      { id: 'method-hierarchy', label: 'Method Hierarchy', shortcut: '⇧⌘H' },
      { id: 'call-hierarchy', label: 'Call Hierarchy', shortcut: '⌃⌥H' },
      {},
      { id: 'bookmarks', label: 'Bookmarks', shortcut: '▶' },
    ]
  },
  {
    id: 'code',
    label: 'Code',
    children: [
      { id: 'override-methods', label: 'Override Methods...', shortcut: '⌃O' },
      { id: 'generate', label: 'Generate...', shortcut: '⌘N' },
      {},
      { id: 'code-completion', label: 'Code Completion', shortcut: '▶' },
      {},
      { id: 'insert-live-template', label: 'Insert Live Template...', shortcut: '⌘J' },
      { id: 'surround-with', label: 'Surround With...', shortcut: '⌥⌘T' },
      { id: 'unwrap-remove', label: 'Unwrap/Remove...', shortcut: '⇧⌘⌦' },
      {},
      { id: 'folding', label: 'Folding', shortcut: '▶' },
      {},
      { id: 'comment-with-line-comment', label: 'Comment With Line Comment', shortcut: '⌘/' },
      { id: 'comment-with-block-comment', label: 'Comment With Block Comment', shortcut: '⌥⌘/' },
      { id: 'reformat-code', label: 'Reformat Code', shortcut: '⌥⌘L' },
      { id: 'reformat-file', label: 'Reformat File', shortcut: '⌥⇧⌘L' },
      { id: 'auto-indent-lines', label: 'Auto-Indent Lines', shortcut: '⌃⌥I' },
      { id: 'optimize-imports', label: 'Optimize Imports', shortcut: '⌃⌥O' },
      { id: 'rearrange-code', label: 'Rearrange Code' },
      {},
      { id: 'move-statement-down', label: 'Move Statement Down', shortcut: '⇧⌘↓' },
      { id: 'move-statement-up', label: 'Move Statement Up', shortcut: '⇧⌘↑' },
      { id: 'move-element-left', label: 'Move Element Left', shortcut: '⌥⇧⌘←' },
      { id: 'move-element-right', label: 'Move Element Right', shortcut: '⌥⇧⌘→' },
      { id: 'move-line-down', label: 'Move Line Down', shortcut: '⌥⇧↓' },
      { id: 'move-line-up', label: 'Move Line Up', shortcut: '⌥⇧↑' },
      {},
      { id: 'inspect-code', label: 'Inspect Code...' },
      { id: 'code-cleanup', label: 'Code Cleanup...' },
      { id: 'silent-mode-cleanup', label: 'Silent Mode Cleanup' },
      { id: 'run-inspection-by-name', label: 'Run Inspection by Name', shortcut: '⌥⇧⌘I' },
      { id: 'configure-current-file-analysis', label: 'Configure Current File Analysis...', shortcut: '⌥⇧⌘H' },
      { id: 'view-offline-inspection-result', label: 'View Offline Inspection Result...' },
      { id: 'locate-duplicates', label: 'Locate Duplicates...' },
      {},
      { id: 'update-copyright', label: 'Update Copyright...' },
    ]
  },
  {
    id: 'refactor',
    label: 'Refactor',
    children: [
      { id: 'refactor-this', label: 'Refactor This...', shortcut: '⌃T' },
      { id: 'rename', label: 'Rename...', shortcut: '⇧F6' },
      { id: 'change-signature', label: 'Change Signature...', shortcut: '⌘F6' },
      { id: 'convert-to-functional-component', label: 'Convert to Functional Component' },
      { id: 'convert-to-class-component', label: 'Convert to Class Component' },
      {},
      { id: 'move-file', label: 'Move File...', shortcut: 'F6' },
      { id: 'copy-file', label: 'Copy File...', shortcut: 'F5' },
      { id: 'safe-delete', label: 'Safe Delete...', shortcut: '⌘⌦' },
      {},
      { id: 'extract-introduce', label: 'Extract/Introduce', shortcut: '▶' },
      { id: 'inline', label: 'Inline', shortcut: '⌥⌘N' },
      { id: 'invert-boolean', label: 'Invert Boolean...' },
      {},
      { id: 'pull-members-up', label: 'Pull Members Up...' },
    ]
  },
  {
    id: 'run',
    label: 'Run',
    children: [
      { id: 'run', label: 'Run', shortcut: '⌃R', icon: 'theme/run-disabled.svg' },
      { id: 'debug', label: 'Debug', shortcut: '⌃D', icon: 'theme/debug-disabled.svg' },
      { id: 'run-with-coverage', label: 'Run With Coverage', icon: 'theme/run-with-coverage.svg' },
      {},
      { id: 'run-2', label: 'Run...', shortcut: '⌃⌥R', icon: 'theme/run.svg' },
      { id: 'debug-2', label: 'Debug...', shortcut: '⌃⌥D', icon: 'theme/debug.svg' },
      { id: 'edit-configuration', label: 'Edit Configurations...' },
      {},
      { id: 'stop', label: 'Stop', shortcut: '⌘F2', icon: 'theme/stop-dark.svg' },
      { id: 'stop-background-processes', label: 'Stop Background Processes...', shortcut: '⇧⌘F2' },
      { id: 'show-running-list', label: 'Show Running List' },
      {},
      { id: 'debugging-actions', label: 'Debugging Actions', shortcut: '▶' },
      { id: 'toggle-breakpoint', label: 'Toggle Breakpoint', shortcut: '▶' },
      { id: 'view-breakpoints', label: 'View Breakpoints...', shortcut: '⇧⌘F8', icon: 'theme/view-breakpoint.svg' },
      {},
      { id: 'test-history', label: 'Test History', shortcut: '▶', icon: 'theme/history.svg' },
      { id: 'import-tests-from-file', label: 'Import Tests from File...', icon: 'theme/import.svg' },
      { id: 'show-code-coverage-data', label: 'Show Code Coverage Data', shortcut: '⌥⌘F6' },
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    children: [
      { id: 'tasks-contexts', label: 'Tasks & Contexts', shortcut: '▶' },
      {},
      { id: 'save-as-live-template', label: 'Save as Live Template...' },
      { id: 'save-file-as-template', label: 'Save File as Template...' },
      { id: 'save-project-as-template', label: 'Save Project as Template...' },
      { id: 'manage-project-templates', label: 'Manage Project Templates...' },
      {},
      { id: 'ide-scripting-console', label: 'IDE Scripting Console' },
      {},
      { id: 'create-command-line-launcher', label: 'Create Command-line Launcher...' },
      {},
      { id: 'xml-actions', label: 'XML Actions', shortcut: '▶' },
      {},
      { id: 'stack-trace-or-thread-dump', label: 'Stack Trace or Thread Dump...' },
      { id: 'deployment', label: 'Deployment', shortcut: '▶', icon: 'theme/transfer.svg' },
      { id: 'start-ssh-session', label: 'Start SSH Session...' },
      { id: 'vagrant', label: 'Vagrant', shortcut: '▶' },
      { id: 'v8-profiling', label: 'V8 Profiling', shortcut: '▶', icon: 'theme/v8.svg' },
      { id: 'http-client', label: 'HTTP Client', shortcut: '▶' },
    ]
  },
  {
    id: 'vcs',
    label: 'VCS',
    children: [
      { id: 'local-history', label: 'Local History', shortcut: '▶' },
      {},
      { id: 'vcs-operations-popup', label: 'VCS Operations Popup...', shortcut: '⌃V' },
      { id: 'commit', label: 'Commit...', shortcut: '⌘K', icon: 'theme/commit.svg' },
      { id: 'update-project', label: 'Update Project...', shortcut: '⌘T', icon: 'theme/incoming.svg' },
      { id: 'refresh-file-status', label: 'Refresh File Status' },
      {},
      { id: 'git', label: 'Git', shortcut: '▶' },
      {},
      {
        id: 'create-patch-from-local-changes',
        label: 'Create Patch from Local Changes...',
        icon: 'theme/patch-file.svg'
      },
      { id: 'apply-patch', label: 'Apply Patch...' },
      { id: 'apply-patch-from-clipboard', label: 'Apply Patch from Clipboard...' },
      { id: 'shelve-changes', label: 'Shelve Changes...', icon: 'theme/shelve.svg' },
      {},
      { id: 'get-from-version-control', label: 'Get from Version Control...' },
      { id: 'import-into-version-control', label: 'Import into Version Control', shortcut: '▶' },
      { id: 'browse-vcs-repository', label: 'Browse VCS Repository', shortcut: '▶' },
      { id: 'sync-settings', label: 'Sync Settings', shortcut: '▶' },
    ]
  },
  {
    id: 'window',
    label: 'Window',
    children: [
      { id: 'minimize', label: 'Minimize', shortcut: '⌘M' },
      { id: 'zoom', label: 'Zoom', shortcut: '⌃⌘=' },
      { id: 'store-current-layout-as-default', label: 'Store Current Layout as Default' },
      { id: 'restore-current-layout', label: 'Restore Default Layout', shortcut: '⇧F12' },
      {},
      { id: 'active-tool-window', label: 'Active Tool Window', shortcut: '▶' },
      { id: 'editor-tabs', label: 'Editor Tabs', shortcut: '▶' },
      { id: 'notifications', label: 'Notifications', shortcut: '▶' },
      { id: 'background-tasks', label: 'Background Tasks', shortcut: '▶' },
      {},
      { id: 'next-project-window', label: 'Next Project Window', shortcut: '⌥⌘`' },
      { id: 'previous-project-window', label: 'Previous Project Window', shortcut: '⌥⇧⌘`' },
    ]
  },
  {
    id: 'help',
    label: 'Help',
    children: [
      { id: 'find-action', label: 'Find Action...', shortcut: '⇧⌘A' },
      {},
      { id: 'help', label: 'Help', icon: 'theme/help.svg' },
      { id: 'keymap-reference', label: 'Keymap Reference' },
      { id: 'demos-and-screencasts', label: 'Demos and Screencasts' },
      { id: 'tip-of-the-day', label: 'Tip of the Day' },
      {},
      { id: 'productivity-guide', label: 'Productivity Guide' },
      {},
      { id: 'contact-supports', label: 'Contact Supports' },
      { id: 'submit-a-bug-report', label: 'Submit a Bug Report...' },
      { id: 'submit-feedback', label: 'Submit Feedback...' },
      { id: 'show-log-in-finder', label: 'Show Log in Finder' },
      { id: 'collect-logs-and-diagnostic-data', label: 'Collect Logs and Diagnostic Data' },
      {},
      { id: 'diagnostic-tools', label: 'Diagnostic Tools', shortcut: '▶' },
      { id: 'change-memory-settings', label: 'Change Memory Settings' },
      { id: 'edit-custom-properties', label: 'Edit Custom Properties...' },
      { id: 'edit-custom-vm-options', label: 'Edit Custom VM Options...' },
      {},
      { id: 'register', label: 'Register...', window: 'Register', disabled: false },
    ]
  }
];

export default menu;
