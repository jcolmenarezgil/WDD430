function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header({ title }) {
    return <h1>{createTitle(title)}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Header title="Probando createTitle" />);
