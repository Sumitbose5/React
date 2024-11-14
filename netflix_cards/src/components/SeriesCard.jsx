export const SeriesCard = ({data}) => {
    const { img_url, name, id, rating, description, cast, genre, watch_url } = data;
    return (
        <li>
            <div>
                <img src={img_url} width="40%" height="40%" alt="image" />
            </div>

            <h2>Name : {name}</h2>
            <h2>Rating : {rating}</h2>
            <h3>Summary : {description}</h3>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} tabIndex="_blank">
                <button className="bg-blue-500 text-white rounded-md p-3">Watch Now</button>
            </a>
        </li>
    );
}