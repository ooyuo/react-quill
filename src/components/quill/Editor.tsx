import { useState, useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import "@/styles/editor.css";

const CustomButton = () => <button className="ql-customButton"></button>;

function addCustomToolbar() {
  const icons = Quill.import("ui/icons") as Record<string, any>;
  icons["customButton"] = CustomButton;

  const toolbar = Quill.import("modules/toolbar") as any;
  toolbar.DEFAULTS.handlers["customButton"] = function () {
    const range = this.quill.getSelection();
    if (range) {
      const position = range.index;
      this.quill.insertText(position, "⭐️");
      this.quill.setSelection(position + 1);
    }
  };
}

addCustomToolbar();

function Editor() {
  const [value, setValue] = useState<string>("");
  const quillRef = useRef<ReactQuill | null>(null);

  const insertStar = () => {
    const quillEditor = quillRef.current?.getEditor();
    if (quillEditor) {
      const range = quillEditor.getSelection();
      if (range) {
        const position = range.index;
        quillEditor.insertText(position, "⭐️");
        quillEditor.setSelection(position + 1);
      }
    }
  };

  useEffect(() => {
    const quillEditor = quillRef.current?.getEditor();
    if (quillEditor) {
      const toolbar = quillEditor.getModule("toolbar") as any; // Cast to any to avoid type error
      toolbar.addHandler("customButton", insertStar);
    }
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={setValue}
      modules={{
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
            ["customButton"], // Ensure custom button is in an object format
          ],
        },
      }}
      placeholder="Compose an epic..."
      theme="snow"
      style={{ height: "400px" }}
    />
  );
}

export default Editor;
