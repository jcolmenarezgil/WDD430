function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

function HomePage() {
    return (
        <div>
            <Header title="Welcome to the Homepage" />
            <Header title="Second header"/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<HomePage />);