interface Props {
    children: string;
}

function Title({ children }: Props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-0 mb-5 bg-light shadow-md">
            <div className="container-fluid white-background py-4">
                <div className="navbar-brand mx-auto">
                    <h2 className="display-5">{children}</h2>
                </div>
            </div>
        </nav>
    );
}

export default Title;
