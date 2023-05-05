const Scroll = ({children}) => {
    return (
        <div className="vh-75 ba bw2 br4 b--blue overflow-y-scroll">
            {children}
        </div>
    );
}

export default Scroll;
