import { Tldraw, TldrawUiProps } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import style from "./Editor.module.css";

interface EditorProps extends TldrawUiProps {}
export default function Editor({ shareZone }: EditorProps) {
  return (
    <div className={style.tldraw__editor}>
      <Tldraw
        persistenceKey="tldraw_basic_editor"
        autoFocus
        shareZone={shareZone}
      />
    </div>
  );
}
