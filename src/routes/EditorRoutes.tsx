import EditorPage from "@/pages/editor/EditorPage";
import { RouteObject } from "react-router-dom";

const EditorRoutes: RouteObject[] = [
  {
    path: "editor",
    children: [{ path: "custom-button", element: <EditorPage /> }],
  },
];

export default EditorRoutes;
