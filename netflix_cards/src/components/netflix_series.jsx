import seriesData from '../api/SeriesData.json'
import { SeriesCard } from './SeriesCard';

export const NetflixSeries = () => {
    return (
        <ul>    
            {seriesData.map((currElem) => (
                <SeriesCard key={currElem.id} data={currElem} />
            ))}
        </ul>
    );
};