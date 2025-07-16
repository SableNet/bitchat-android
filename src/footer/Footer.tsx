import { useRef, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";

const Footer = () => {
  const [text, setText] = useState("");
  const [isMultiline, setIsMultiline] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset first
      setIsMultiline(textarea.scrollHeight > textarea.offsetHeight);
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div
      className={clsx(
        "flex p-2 w-full gap-4",
        isMultiline ? "items-end" : "items-center"
      )}
    >
      <div className="flex items-center">name</div>

      <div className="flex flex-1 items-end caret-primary">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="message"
          id="message"
          className="w-full max-w-lg outline-none px-2 py-1 rounded resize-none overflow-hidden"
          rows={1}
        />
      </div>

      <div className="flex items-end">
        <ArrowUp className="h-6 w-6 bg-primary rounded-full text-black p-1" />
      </div>
    </div>
  );
};

export default Footer;
