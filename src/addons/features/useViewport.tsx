import { TLPageId, debounce } from "@tldraw/tldraw";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const VIEWPORT_QUERY_PARAM = 'viewport'
const PAGE_QUERY_PARAM = 'page'

export default function useViewport() {
  const [searchParams, setSearchParams] = useSearchParams();
  const updatedSearchParams = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams])

  const pageId = searchParams.get(PAGE_QUERY_PARAM) as TLPageId

  const viewport = searchParams.get(VIEWPORT_QUERY_PARAM)
  const coord = viewport?.split(',') || '0,0,0'
  const x = Number(coord[0])
  const y = Number(coord[1])
  const z = Number(coord[2])
  const viewportCoords = { x, y, z }

  const setPage = debounce((pageId: TLPageId) => {
    updatedSearchParams.set(PAGE_QUERY_PARAM, pageId);
    setSearchParams(updatedSearchParams.toString());
  }, 300)

  const setViewportCoords = debounce((x: number, y: number, z: number) => {
    updatedSearchParams.set(VIEWPORT_QUERY_PARAM, `${x},${y},${z}`);
    setSearchParams(updatedSearchParams.toString());
  }, 300)

  return { pageId, viewportCoords, setPage, setViewportCoords }
}

