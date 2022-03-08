import { useEffect, useRef } from 'react'

function DomRef() {
    const inputEl = useRef<HTMLInputElement>(null); // (null!) --> when values will be definitely not null
    useEffect(() => {
      inputEl.current?.focus();
    }, []);
    return (
      <div>
        <input type="text" ref={inputEl} />
      </div>
    );
}

export default DomRef