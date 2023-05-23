
const SectionTitle = ({subHading, hading}) => {
    return (
        <div className="text-center w-4/12 mx-auto mb-12">
            <p className="text-yellow-600 mb-3">---{subHading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-3">{hading}</h3>
        </div>
    );
};

export default SectionTitle;