import Header from '../components/Travel/Header';
import Entry from '../components/Travel/Entry';
import data from '../data'

export default function TravelJournal() {
    const entries = data.map((item) => {
        return (
            <Entry
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <>
            <Header />
            {entries}
        </>
    );
}