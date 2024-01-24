import { CardsItem } from "./CardsItem";

export function CardsView(props) {
    const { products } = props;
    const result = [];

    products.forEach((p) => result.push(<CardsItem obj={p}/>))

    return (
        <ul className="cards-view">{result}</ul>
    )
}