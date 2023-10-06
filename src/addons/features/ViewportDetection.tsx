import { TLEventMapHandler, useEditor } from "@tldraw/tldraw"
import { useEffect } from "react"
import useViewport from "./useViewport"

export default function ViewportDetection() {

  const editor = useEditor()

  const { setPage, setViewportCoords } = useViewport()

  useEffect(() => {
    const handleChangeEvent: TLEventMapHandler<'change'> = (change) => {
      if (change.source === 'user') {
        for (const [from, to] of Object.values(change.changes.updated)) {
          if (to.typeName === 'camera') {
            setViewportCoords(to.x, to.y, to.z)
          }
          if (from.typeName === 'instance' &&
            to.typeName === 'instance' &&
            from.currentPageId !== to.currentPageId) {
            setPage(to.currentPageId)
          }
        }
      }
    }
    editor.on('change', handleChangeEvent)

    return () => {
      editor.off('change', handleChangeEvent)
    }
  }, [editor, setPage, setViewportCoords])

  return null
}
