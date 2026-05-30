'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Highlighter, Link2, ImageIcon, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, Heading3,
  Minus, Quote, Undo, Redo, Link2Off,
} from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
  className?: string
}

// ── Toolbar button ────────────────────────────────────────────────────────────

function ToolBtn({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void
  active?: boolean
  disabled?: boolean
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onMouseDown={e => { e.preventDefault(); onClick() }}
      disabled={disabled}
      title={title}
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded text-sm transition-colors',
        active
          ? 'bg-[var(--color-accent-1)] text-white'
          : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]',
        disabled && 'opacity-30 cursor-not-allowed',
      )}
    >
      {children}
    </button>
  )
}

function Divider() {
  return <div className="w-px h-5 bg-[var(--color-border)] mx-0.5" />
}

// ── Main component ────────────────────────────────────────────────────────────

export function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
  const imageInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Underline,
      Highlight.configure({ multicolor: false }),
      Link.configure({ openOnClick: false, autolink: true }),
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: placeholder ?? 'Write something…' }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose-editor focus:outline-none min-h-[200px] p-4',
      },
    },
  })

  const setLink = useCallback(() => {
    if (!editor) return
    const prev = editor.getAttributes('link').href as string | undefined
    const url = window.prompt('URL', prev ?? 'https://')
    if (url === null) return
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }
  }, [editor])

  const insertImage = useCallback((src: string) => {
    editor?.chain().focus().setImage({ src }).run()
  }, [editor])

  const handleImageFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      if (typeof ev.target?.result === 'string') insertImage(ev.target.result)
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }, [insertImage])

  const promptImageUrl = useCallback(() => {
    const url = window.prompt('Image URL')
    if (url) insertImage(url)
  }, [insertImage])

  if (!editor) return null

  return (
    <div className={cn('rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden', className)}>
      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">

        {/* History */}
        <ToolBtn title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          <Undo className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          <Redo className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Headings */}
        <ToolBtn title="Heading 1" active={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <Heading1 className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <Heading2 className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <Heading3 className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Inline marks */}
        <ToolBtn title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Highlight" active={editor.isActive('highlight')} onClick={() => editor.chain().focus().toggleHighlight().run()}>
          <Highlighter className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Lists */}
        <ToolBtn title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Ordered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Blockquote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <Minus className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Alignment */}
        <ToolBtn title="Align left" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>
          <AlignLeft className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Align center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
          <AlignCenter className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn title="Align right" active={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
          <AlignRight className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Link */}
        <ToolBtn title="Set link" active={editor.isActive('link')} onClick={setLink}>
          <Link2 className="h-3.5 w-3.5" />
        </ToolBtn>
        {editor.isActive('link') && (
          <ToolBtn title="Remove link" onClick={() => editor.chain().focus().unsetLink().run()}>
            <Link2Off className="h-3.5 w-3.5" />
          </ToolBtn>
        )}

        <Divider />

        {/* Image */}
        <ToolBtn title="Insert image from URL" onClick={promptImageUrl}>
          <ImageIcon className="h-3.5 w-3.5" />
        </ToolBtn>
        <label title="Upload image" className={cn(
          'flex h-7 w-7 cursor-pointer items-center justify-center rounded text-sm transition-colors',
          'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]',
        )}>
          <span className="text-[10px] font-bold leading-none select-none">↑</span>
          <input ref={imageInputRef} type="file" accept="image/*" className="sr-only" onChange={handleImageFile} />
        </label>
      </div>

      {/* ── Editor area ── */}
      <EditorContent editor={editor} className="rte-content" />

      <style>{`
        .rte-content .prose-editor h1 { font-size: 1.5rem; font-weight: 700; margin: 1rem 0 0.5rem; line-height: 1.3; color: var(--color-text); }
        .rte-content .prose-editor h2 { font-size: 1.2rem; font-weight: 600; margin: 0.875rem 0 0.4rem; line-height: 1.35; color: var(--color-text); }
        .rte-content .prose-editor h3 { font-size: 1rem; font-weight: 600; margin: 0.75rem 0 0.35rem; color: var(--color-text); }
        .rte-content .prose-editor p { margin: 0.35rem 0; color: var(--color-text-muted); line-height: 1.65; font-size: 0.875rem; }
        .rte-content .prose-editor strong { font-weight: 600; color: var(--color-text); }
        .rte-content .prose-editor em { font-style: italic; }
        .rte-content .prose-editor u { text-decoration: underline; }
        .rte-content .prose-editor s { text-decoration: line-through; }
        .rte-content .prose-editor mark { background: var(--color-accent-2-subtle); color: var(--color-text); border-radius: 2px; padding: 0 2px; }
        .rte-content .prose-editor a { color: var(--color-accent-1); text-decoration: underline; }
        .rte-content .prose-editor ul { list-style: disc; padding-left: 1.5rem; margin: 0.35rem 0; }
        .rte-content .prose-editor ol { list-style: decimal; padding-left: 1.5rem; margin: 0.35rem 0; }
        .rte-content .prose-editor li { color: var(--color-text-muted); font-size: 0.875rem; margin: 0.15rem 0; }
        .rte-content .prose-editor blockquote { border-left: 3px solid var(--color-accent-1); padding-left: 1rem; margin: 0.5rem 0; color: var(--color-text-muted); font-style: italic; }
        .rte-content .prose-editor hr { border: none; border-top: 1px solid var(--color-border); margin: 1rem 0; }
        .rte-content .prose-editor img { max-width: 100%; border-radius: var(--radius-md); margin: 0.5rem 0; }
        .rte-content .prose-editor code { font-family: var(--font-mono); background: var(--color-surface-raised); padding: 1px 4px; border-radius: 3px; font-size: 0.8em; }
        .rte-content .prose-editor pre { background: var(--color-surface-raised); padding: 0.75rem 1rem; border-radius: var(--radius-md); overflow-x: auto; margin: 0.5rem 0; }
        .rte-content .prose-editor pre code { background: none; padding: 0; font-size: 0.8rem; color: var(--color-text); }
        .rte-content .tiptap p.is-editor-empty:first-child::before { content: attr(data-placeholder); color: var(--color-text-subtle); pointer-events: none; float: left; height: 0; }
        .rte-content .prose-editor .ProseMirror-selectednode { outline: 2px solid var(--color-accent-1); outline-offset: 2px; }
      `}</style>
    </div>
  )
}
