import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import { Button } from '@/components/ui/button';
import {
  Bold, Italic, List, ListOrdered, Quote, Link as LinkIcon, Undo, Redo, Code, AlignLeft, AlignCenter, AlignRight, ImageIcon, XIcon
} from 'lucide-react';
import '../styles/editor.css';

interface BlogEditorProps {
  value: string;
  onChange: (content: string) => void;
  language?: string;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;
  return (
    <div className="border-b p-2 flex flex-wrap gap-2 items-center">
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'bg-muted' : ''} title="Bold"><Bold className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'bg-muted' : ''} title="Italic"><Italic className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'bg-muted' : ''} title="Heading 1">H1</Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'bg-muted' : ''} title="Heading 2">H2</Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'bg-muted' : ''} title="Heading 3">H3</Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'bg-muted' : ''} title="Bullet List"><List className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'bg-muted' : ''} title="Ordered List"><ListOrdered className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'bg-muted' : ''} title="Blockquote"><Quote className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'bg-muted' : ''} title="Code Block"><Code className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => { const url = window.prompt('Enter image URL:'); if (url) { editor.chain().focus().setImage({ src: url }).run(); } }} title="Insert Image"><ImageIcon className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => { const url = window.prompt('Enter link URL:'); if (url) { editor.chain().focus().setLink({ href: url }).run(); } }} className={editor.isActive('link') ? 'bg-muted' : ''} title="Insert Link"><LinkIcon className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'bg-muted' : ''} title="Align Left"><AlignLeft className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'bg-muted' : ''} title="Align Center"><AlignCenter className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'bg-muted' : ''} title="Align Right"><AlignRight className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().undo().run()} title="Undo"><Undo className="h-4 w-4" /></Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().redo().run()} title="Redo"><Redo className="h-4 w-4" /></Button>
      <input
        type="color"
        onChange={e => editor.chain().focus().setColor(e.target.value).run()}
        value={editor.getAttributes('textStyle').color || '#000000'}
        title="Text Color"
        style={{ width: 32, height: 32, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().unsetColor().run()}
        title="Remove Color"
      >
        <XIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default function BlogEditor({ value, onChange, language }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TextStyle,
      Color,
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="border rounded-lg min-h-[300px]">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
} 