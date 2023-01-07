import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import libraryStyle from './library.scss';
export function LibraryComponent(props) {
    const { children, textContent } = props;
    return (_jsxs("div", { className: libraryStyle.test_library, children: [_jsx("h3", { className: libraryStyle.test_library__header, children: textContent }), _jsx("div", { children: children })] }));
}
//# sourceMappingURL=library-component.js.map