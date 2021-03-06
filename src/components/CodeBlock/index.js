import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "../../../node_modules/prism-react-renderer/themes/github";
import "./style.scss";

const CodeBlock = ({ children }) => {
  // 언어를 찾기위한 과정
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang ?? "";

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={(className, "prism-code")}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
