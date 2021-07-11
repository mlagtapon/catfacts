const CatCard = (props) => {
    const {fact} = props;

    return (
        <div className="card col-2">
            <div className="card-body">
                <h2 className="card-title">{fact.text}</h2>
                    {/* <h6 className="card-subtitle text-muted my-3">Posted By: {fact.user}</h6> */}
            </div>
        </div>
    );
}

export default CatCard;